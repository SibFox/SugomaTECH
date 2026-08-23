@echo off
chcp 65001 >nul
setlocal EnableExtensions EnableDelayedExpansion

rem ===== Settings =====
set "REPO_OWNER=SibFox"
set "REPO_NAME=SugomaTECH"
set "BRANCH=releases"
set "TARGET_DIR=%~dp0"
if "%TARGET_DIR:~-1%"=="\" set "TARGET_DIR=%TARGET_DIR:~0,-1%"
set "LOCAL_VERSION_FILE=%~dp0local_version.txt"
set "REPO_URL=https://github.com/%REPO_OWNER%/%REPO_NAME%.git"
set "RAW_BASE=https://raw.githubusercontent.com/%REPO_OWNER%/%REPO_NAME%/%BRANCH%"
set "GIT_TERMINAL_PROMPT=0"

rem ===== Paths controlled by this updater =====
set "FILES[0]=mods"
set "FILES[1]=config"
set "FILES[2]=kubejs"
set "FILES[3]=resourcepacks"
set "FILES[4]=fancymenu"
set "FILES[5]=fancymenu_data"
set "FILES[6]=pointblank"
set "FILE_COUNT=6"

rem ===== Self-update: intentionally uses curl =====
:check_bat_version
set "REMOTE_VERSION_TMP=%TEMP%\remote_version_%RANDOM%.txt"
curl -f -sS -L -o "%REMOTE_VERSION_TMP%" "%RAW_BASE%/version.txt"
if errorlevel 1 (
    echo [ERROR] Не получается скачать version.txt.
    if exist "%REMOTE_VERSION_TMP%" del /Q "%REMOTE_VERSION_TMP%"
    goto :end
)
call :parse_version_file "%REMOTE_VERSION_TMP%" REMOTE
call :parse_version_file "%LOCAL_VERSION_FILE%" LOCAL
del /Q "%REMOTE_VERSION_TMP%"

echo.
echo Local BAT version:       "%LOCAL_BAT%"
echo Repository BAT version:  "%REMOTE_BAT%"
echo Local build version:     "%LOCAL_BUILD%"
echo Repository build version:"%REMOTE_BUILD%"

if not defined REMOTE_BAT goto :check_git
if "%REMOTE_BAT%"=="%LOCAL_BAT%" goto :check_git

echo Обновление скрипта...
set "UPDATER_TMP=%TEMP%\update_sborka_%RANDOM%.bat"
curl -f -sS -L -o "!UPDATER_TMP!" "%RAW_BASE%/update_sborka.bat"
if errorlevel 1 goto :self_update_error
goto :safe_self_update

goto :check_git

:safe_self_update
call :convert_to_utf8_no_bom "!UPDATER_TMP!"
copy /Y "!UPDATER_TMP!" "%~f0" >nul
del /Q "!UPDATER_TMP!"
> "%LOCAL_VERSION_FILE%" (
    echo(%REMOTE_BAT%
    echo(%LOCAL_BUILD%
)
start "" "%~f0"
endlocal
goto :eof

:check_git
echo Проверка установки...
where git >nul 2>&1
if errorlevel 1 goto :install_git
call :trust_current_directory
call :build_sparse_paths
rem call :backup_self
call :update_build
goto :end

:self_update_error
echo [ERROR] Cannot download the new script version.
goto :end

:trust_current_directory
set "SAFE_DIR_FOUND=0"
for /f "delims=" %%D in ('git config --global --get-all safe.directory 2^>nul') do (
    if /I "%%~D"=="%TARGET_DIR%" set "SAFE_DIR_FOUND=1"
)
if "!SAFE_DIR_FOUND!"=="0" git config --global --add safe.directory "%TARGET_DIR%"
goto :eof

:build_sparse_paths
echo Настройка путей...
set "SPARSE_PATTERNS="
set "GIT_PATHS="
for /L %%i in (0,1,%FILE_COUNT%) do if defined FILES[%%i] (
    rem Non-cone patterns exclude all repository-root files, including this BAT.
    set "SPARSE_PATTERNS=!SPARSE_PATTERNS! /!FILES[%%i]!/"
    set "GIT_PATHS=!GIT_PATHS! !FILES[%%i]!"
)
goto :eof

:backup_self
set "SELF_BACKUP=%TEMP%\update_sborka_self_%RANDOM%.bat"
copy /Y "%~f0" "!SELF_BACKUP!" >nul
goto :eof

:restore_self
if defined SELF_BACKUP if exist "!SELF_BACKUP!" (
    copy /Y "!SELF_BACKUP!" "%~f0" >nul
    del /Q "!SELF_BACKUP!"
)
goto :eof

rem ===== Update directly in the game directory =====
:update_build
echo Обновление сборки...
pushd "%TARGET_DIR%"

if not exist ".git" (
    echo.
    echo Первая установка файлов...
    git init
    if errorlevel 1 goto :git_error_popd
    git remote add origin "%REPO_URL%"
) else (
    git remote set-url origin "%REPO_URL%"
)

rem Non-cone mode is mandatory: cone mode always includes repository-root files.
git sparse-checkout set --no-cone !SPARSE_PATTERNS!
if errorlevel 1 goto :git_error_popd
rem call :restore_self
git update-index --skip-worktree -- "%~nx0" >nul 2>&1

rem Partial fetch obtains blobs only when selected paths need them.
git -c credential.helper= -c credential.interactive=false fetch --quiet --filter=blob:none --depth=1 origin "+refs/heads/%BRANCH%:refs/remotes/origin/%BRANCH%"
if errorlevel 1 goto :git_error_popd

set "LOCAL_COMMIT="
git rev-parse --verify HEAD >nul 2>&1
if not errorlevel 1 for /f %%H in ('git rev-parse --verify HEAD') do set "LOCAL_COMMIT=%%H"
for /f %%H in ('git rev-parse "origin/%BRANCH%"') do set "REMOTE_COMMIT=%%H"
if not defined LOCAL_COMMIT goto :apply_update
if /I "!LOCAL_COMMIT!"=="!REMOTE_COMMIT!" goto :build_current

git diff --quiet HEAD "origin/%BRANCH%" -- !GIT_PATHS!
if errorlevel 1 echo Обновление отслеживаемых файлов...
if not errorlevel 1 echo Новый commit не имеет изменений в отслеживаемых путях.

:apply_update
if not defined LOCAL_COMMIT echo Первый checkout отслеживаемых файлов...
rem No git clean: untracked user mods and files remain untouched.
git reset --hard "origin/%BRANCH%"
if errorlevel 1 goto :git_error_popd

popd
rem call :restore_self
call :write_local_version
echo Обновление завершено.
goto :eof

:build_current
popd
rem call :restore_self
echo Установлена последняя версия сборки.
goto :eof

:git_error_popd
popd
rem call :restore_self
:git_error
echo [ERROR] Git не может обновить сборку.
goto :eof

:write_local_version
> "%LOCAL_VERSION_FILE%" (
    echo(%REMOTE_BAT%
    echo(%REMOTE_BUILD%
)
goto :eof

rem ===== Automatic Git installation =====
:install_git
echo Git not found. Trying to install it...

where winget >nul 2>&1
if not errorlevel 1 (
    winget source update
    winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
    if not errorlevel 1 goto :info_on_git
    echo [WARNING] winget installation failed. Trying curl...
)

where curl >nul 2>&1
if not errorlevel 1 (
    echo Installing through direct download...
    set "GIT_INSTALLER=%TEMP%\git_installer.exe"
    curl -L --retry 3 --connect-timeout 15 -o "!GIT_INSTALLER!" "https://github.com/git-for-windows/git/releases/download/v2.55.0.windows.3/Git-2.55.0.3-64-bit.exe"
    if exist "!GIT_INSTALLER!" (
        echo Installing Git...
        "!GIT_INSTALLER!" /VERYSILENT /NORESTART /NOCANCEL /SP- /CLOSEAPPLICATIONS /RESTARTAPPLICATIONS
        del /Q "!GIT_INSTALLER!"
        goto :info_on_git
    )
)

echo [ERROR] Git не может установиться автоматически. Установите его вручную: https://git-scm.com/download/win
goto :end

:info_on_git
echo Git установлен. Перезагрузка скрипта...
start "" "%~f0"
endlocal
goto :eof

rem %1 = file path, %2 = prefix (REMOTE or LOCAL)
:parse_version_file
set "LN=0"
set "%2_BAT="
set "%2_BUILD="
if not exist "%~1" goto :eof
for /f "usebackq tokens=* delims=" %%L in ("%~1") do (
    set /a LN+=1
    if !LN! EQU 1 set "%2_BAT=%%L"
    if !LN! EQU 2 set "%2_BUILD=%%L"
)
goto :eof

:convert_to_utf8_no_bom
powershell -NoProfile -Command "$p='%~1'; $c=[System.IO.File]::ReadAllText($p); [System.IO.File]::WriteAllText($p, $c, [System.Text.UTF8Encoding]::new($false))"
goto :eof

:end
echo.
pause
endlocal
