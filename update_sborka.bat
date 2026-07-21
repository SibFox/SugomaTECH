
@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

rem ===== Setting =====

set "REPO_OWNER=SibFox"
set "REPO_NAME=SugomaTECH"
set "BRANCH=releases"
set "TARGET_DIR=%~dp0"
if "%TARGET_DIR:~-1%"=="\" set "TARGET_DIR=%TARGET_DIR:~0,-1%"
set "GITHUB_PAT=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"

set "REPO_URL=https://%GITHUB_PAT%@github.com/%REPO_OWNER%/%REPO_NAME%.git"
set "LOCAL_VERSION_FILE=%~dp0local_version.txt"

rem ===== Files for copy =====
set FILES[0]=mods
set FILES[1]=config
set FILES[2]=kubejs
set FILES[3]=resourcepacks
set FILES[4]=fancymenu
set FILES[5]=fancymenu_data
set FILE_COUNT=5

rem ===== Required files (always downloaded) =====
@REM set REQUIRED[0]=ПРОЧИТАТЬ.txt
@REM set REQUIRED_COUNT=0


rem ===== Bat version check =====
:check_for_bat_version
echo.
echo ============================================
echo Проверка версии...
echo ============================================
echo.

set "RAW_BASE=https://raw.githubusercontent.com/%REPO_OWNER%/%REPO_NAME%/%BRANCH%"
set "REMOTE_VERSION_TMP=%TEMP%\remote_version_%RANDOM%.txt"

curl -s -L -H "Authorization: token %GITHUB_PAT%" -o "%REMOTE_VERSION_TMP%" "%RAW_BASE%/version.txt"

if not exist "%REMOTE_VERSION_TMP%" (
    echo [ПРЕДУПРЕЖДЕНИЕ] Не удалось получить version.txt. Проверка версии пропущена.
    goto :bat_version_check_done
)

call :parse_version_file "%REMOTE_VERSION_TMP%" REMOTE
call :parse_version_file "%LOCAL_VERSION_FILE%" LOCAL

del /Q "%REMOTE_VERSION_TMP%"

echo Локальная версия bat:        "%LOCAL_BAT%"
echo Версия bat в репозитории:    "%REMOTE_BAT%"
echo Локальная версия сборки:     "%LOCAL_BUILD%"
echo Версия сборки в репозитории: "%REMOTE_BUILD%"

if "%REMOTE_BAT%"=="404: Not Found" (
    echo [ПРЕДУПРЕЖДЕНИЕ] Файл версий не обнаружен, продолжаю со старой версией скрипта.
    set "REMOTE_BAT="
    set "REMOTE_BUILD="
    set "REMOTE_REQUIRED="
    goto :bat_version_check_done
)

if not "%REMOTE_BAT%"=="%LOCAL_BAT%" (
    echo.
    echo Доступна новая версия скрипта. Обновляю сам файл...

    set "UPDATER_TMP=%TEMP%\update_sborka_%RANDOM%.bat"
    curl -s -L -H "Authorization: token %GITHUB_PAT%" -o "!UPDATER_TMP!" "%RAW_BASE%/update_sborka.bat"

    if exist "!UPDATER_TMP!" (
        call :convert_to_crlf "!UPDATER_TMP!"
        copy /Y "!UPDATER_TMP!" "%~f0" >nul
        del /Q "!UPDATER_TMP!"

        > "%LOCAL_VERSION_FILE%" (
            echo(%REMOTE_BAT%
            echo(%LOCAL_BUILD%
        )

        echo.
        echo Скрипт обновлён до версии %REMOTE_BAT%.
        echo Запустите его заново, чтобы применить обновления.
        goto :end
    ) else (
        echo [ПРЕДУПРЕЖДЕНИЕ] Не удалось скачать update_sborka.bat, продолжаю со старой версией скрипта.
    )
) else (
    echo Версия bat актуальна.
)

:bat_version_check_done


where git >nul 2>&1
if errorlevel 1 (
    goto :install_git
)

git config --global core.quotepath false
git config --global core.autocrlf true


rem ===== Pack (build) version check - mandatory update before menu =====
:check_for_pack_version
set "FS_FLAG = 0"
if not exist "%LOCAL_VERSION_FILE%" set "FS_FLAG = 1"
if "%LOCAL_BUILD%"=="" set "FS_FLAG = 1"
if "!FS_FLAG!"=="1" (
    echo.
    echo ============================================
    echo Первая установка. Скачивание всех файлов...
    echo ============================================
    call :download_files "ALL"

    > "%LOCAL_VERSION_FILE%" (
        echo(%REMOTE_BAT%
        echo(%REMOTE_BUILD%
    )
    goto :pack_version_check_done
) else (
    if defined REMOTE_BUILD (
        if not "%REMOTE_BUILD%"=="%LOCAL_BUILD%" (
            echo.
            echo ============================================
            echo Доступно обновление сборки. Скачивание обновлённых файлов...
            echo ============================================
            call :download_files "%REMOTE_REQUIRED%"

            > "%LOCAL_VERSION_FILE%" (
                echo(%REMOTE_BAT%
                echo(%REMOTE_BUILD%
            )
            goto :pack_version_check_done
        ) else (
            echo Версия сборки актуальна.
        )
    )
)

:pack_version_check_done


:user_choose
rem ===== Menu =====
echo.
echo ============================================
echo Доступные файлы и папки для скачивания:
echo ============================================
for /L %%i in (0,1,%FILE_COUNT%) do (
    echo   [%%i] !FILES[%%i]!
)
echo ============================================
echo.
echo Введите номера через запятую ^(например: 0,2,3^)
echo или "all" для скачивания всех файлов
echo Введите "q" для выхода
echo.
set /p "USER_CHOICE=Ваш выбор: "

rem ===== Choise =====
if /I "%USER_CHOICE%"=="q" (
    goto :end
)
set "SELECTED_LIST="
if /I "%USER_CHOICE%"=="all" (
    set "SELECTED_LIST=ALL"
    @REM for /L %%i in (0,1,%FILE_COUNT%) do set "SELECTED_LIST=!SELECTED_LIST!,%%i"
) else (
    set "SELECTED_LIST=,%USER_CHOICE%,"
    set "SELECTED_LIST=!SELECTED_LIST: =!"
)

echo.
echo Выбрано: !SELECTED_LIST!

call :download_files "%SELECTED_LIST%"

goto :user_choose


rem ============================================
rem Subroutines
rem ============================================

rem %1 = index list in ",0,3,4," format, or "ALL"
:download_files
setlocal enabledelayedexpansion
set "IDX_LIST=%~1"

set "SPARSE_PATHS="
if /I "!IDX_LIST!"=="ALL" (
    for /L %%i in (0,1,%FILE_COUNT%) do (
        if defined FILES[%%i] set "SPARSE_PATHS=!SPARSE_PATHS! "!FILES[%%i]!""
    )
) else (
    for /L %%i in (0,1,%FILE_COUNT%) do (
        if defined FILES[%%i] (
            echo !IDX_LIST! | findstr /C:",%%i," >nul
            if not errorlevel 1 set "SPARSE_PATHS=!SPARSE_PATHS! "!FILES[%%i]!""
        )
    )
)
@REM for /L %%i in (0,1,%REQUIRED_COUNT%) do (
@REM     if defined REQUIRED[%%i] set "SPARSE_PATHS=!SPARSE_PATHS! "!REQUIRED[%%i]!""
@REM )

if "!SPARSE_PATHS!"=="" (
    echo Нечего скачивать на этом шаге.
    endlocal
    goto :eof
)

set "DL_TEMP=%TEMP%\repo_extract_%RANDOM%_%RANDOM%"

echo.
echo Клонирование: !SPARSE_PATHS!
git clone --progress --filter=blob:none --no-checkout --depth 1 --branch "%BRANCH%" "%REPO_URL%" "!DL_TEMP!"
if errorlevel 1 (
    echo Ошибка при клонировании.
    if exist "!DL_TEMP!" rmdir /S /Q "!DL_TEMP!"
    endlocal
    goto :eof
)

pushd "!DL_TEMP!"

git sparse-checkout init --cone
git sparse-checkout set !SPARSE_PATHS!

if errorlevel 1 (
    echo [ОШИБКА] Не удалось настроить sparse-checkout.
    popd
    rmdir /S /Q "!DL_TEMP!"
    endlocal
    goto :eof
)

git checkout "%BRANCH%"
if errorlevel 1 (
    echo [ОШИБКА] Не удалось выполнить checkout.
    popd
    rmdir /S /Q "!DL_TEMP!"
    endlocal
    goto :eof
)
popd

echo.
echo Копирование файлов в !TARGET_DIR!...
if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

for /L %%i in (0,1,%FILE_COUNT%) do (
    if defined FILES[%%i] (
        set "MATCHED=0"
        if /I "!IDX_LIST!"=="ALL" (
            set "MATCHED=1"
        ) else (
            echo !IDX_LIST! | findstr /C:",%%i," >nul
            if not errorlevel 1 set "MATCHED=1"
        )
        if "!MATCHED!"=="1" (
            set "SRC=!FILES[%%i]!"
            set "SRC_PATH=!DL_TEMP!\!SRC!"
            set "DST_PATH=%TARGET_DIR%\!SRC!"

            if exist "!SRC_PATH!\*" (
                echo [Папка]  !SRC!
                robocopy "!SRC_PATH!" "!DST_PATH!" /MIR > nul
            ) else (
                for %%F in ("!DST_PATH!") do if not exist "%%~dpF" mkdir "%%~dpF"
                copy /Y "!SRC_PATH!" "!DST_PATH!" >nul
                echo Обновлён файл: !SRC!
            )
        )
    )
)

@REM for /L %%i in (0,1,%REQUIRED_COUNT%) do (
@REM     if defined REQUIRED[%%i] (
@REM         set "SRC=!REQUIRED[%%i]!"
@REM         set "SRC_PATH=!DL_TEMP!\!SRC!"
@REM         set "DST_PATH=%TARGET_DIR%\!SRC!"

@REM         if exist "!SRC_PATH!\*" (
@REM             echo [Папка]  !SRC!
@REM             robocopy "!SRC_PATH!" "!DST_PATH!" /MIR /NFL /NDL /NJH /NJS
@REM         ) else (
@REM             for %%F in ("!DST_PATH!") do if not exist "%%~dpF" mkdir "%%~dpF"
@REM             copy /Y "!SRC_PATH!" "!DST_PATH!" >nul
@REM             echo Обновлён файл: !SRC!
@REM         )
@REM     )
@REM )

rem ===== Flatten mods\CLIENT into mods, remove empty CLIENT folder =====
if exist "%TARGET_DIR%\mods\CLIENT" (
    echo Перенос клиентских модов из mods\CLIENT...
    robocopy "%TARGET_DIR%\mods\CLIENT" "%TARGET_DIR%\mods" /MOVE /E /NFL /NDL /NJH /NJS
    if exist "%TARGET_DIR%\mods\CLIENT" rmdir /S /Q "%TARGET_DIR%\mods\CLIENT"
)

rmdir /S /Q "!DL_TEMP!"
endlocal
goto :eof


:install_git
echo Git не найден. Пробую установить...

where winget >nul 2>&1
if not errorlevel 1 (
    winget source update
    winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
    if not errorlevel 1 (
        goto :info_on_git
    ) else (
        echo [ПРЕДУПРЕЖДЕНИЕ] Скачивание через winget не удалось. Пробую curl...
    )
)

where curl >nul 2>&1
if not errorlevel 1 (
    echo Установка через прямое скачивание...
    set "GIT_INSTALLER=%TEMP%\git_installer.exe"
    curl -L --retry 3 --connect-timeout 15 -o "!GIT_INSTALLER!" "https://github.com/git-for-windows/git/releases/download/v2.55.0.windows.3/Git-2.55.0.3-64-bit.exe"

    if exist "!GIT_INSTALLER!" (
        echo Установка Git...
        "!GIT_INSTALLER!" /VERYSILENT /NORESTART /NOCANCEL /SP- /CLOSEAPPLICATIONS /RESTARTAPPLICATIONS
        del /Q "!GIT_INSTALLER!"
        goto :info_on_git
    )
)

echo [ОШИБКА] Не удалось установить Git автоматически. Установите вручную: https://git-scm.com/download/win
goto :end


:info_on_git
echo Git установлен. Запустите скрипт заново, чтобы изменения PATH применились.
goto :end


rem %1 = file path, %2 = prefix (REMOTE or LOCAL)
:parse_version_file
set "LN=0"
set "%2_BAT="
set "%2_BUILD="
set "%2_REQUIRED="
if not exist %1 goto :eof
for /f "usebackq tokens=* delims=" %%L in (%1) do (
    set /a LN+=1
    if !LN! EQU 1 set "%2_BAT=%%L"
    if !LN! EQU 2 set "%2_BUILD=%%L"
    if !LN! EQU 3 set "%2_REQUIRED=%%L"
)
goto :eof


:convert_to_crlf
powershell -NoProfile -Command "$c = Get-Content -Raw -Encoding UTF8 -Path '%~1'; $c = $c -replace \"`r`n\", \"`n\" -replace \"`n\", \"`r`n\"; [System.IO.File]::WriteAllText('%~1', $c, [System.Text.Encoding]::UTF8)"
goto :eof


:cleanup
goto :end

:end
echo Всё.
pause
endlocal