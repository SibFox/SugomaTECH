#!/bin/sh

set -eu

SERVER_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
RUN_SCRIPT="$SERVER_DIR/run.sh"
SESSION="minecraft"
RESTART_HOUR=""

if ! command -v tmux >/dev/null 2>&1; then
    echo "Ошибка: установите tmux"
    exit 1
fi

if [ ! -x "$RUN_SCRIPT" ]; then
    echo "Ошибка: $RUN_SCRIPT не существует или не имеет права на запуск"
    exit 1
fi

has_server() {
    tmux has-session -t "$SESSION" 2>/dev/null
}

send_command() {
    tmux send-keys -t "$SESSION" "$1" Enter
}

start_server() {
    if has_server; then
		echo "Сервер уже запущен"
        return
    fi

    echo "Сервер запускается"

    tmux new-session -d \
        -s "$SESSION" \
        -c "$SERVER_DIR" \
        "exec /bin/sh '$RUN_SCRIPT'"

    gnome-terminal \
        --title="Minecraft Server" \
        -- bash -c "tmux attach-session -t '$SESSION'" \
        >/dev/null 2>&1 &

    sleep 10

    if ! has_server; then
        echo "Ошибка: run.sh завершился"
        exit 1
    fi

    echo "Серверный процесс запущен"
}

wait_for_stop() {
    while has_server; do
        sleep 5
    done
}

notify() {
    echo "Сервер будет перезагружен через $1"
    send_command "tellraw @a {\"text\":\"$1\",\"color\":\"yellow\"}"
}

trap cleanup EXIT
trap 'exit 0' INT TERM

MAIN_PID=$$
TIMER_PID=""

cleanup() {
    if [ -n "$TIMER_PID" ]; then
        kill "$TIMER_PID" 2>/dev/null || true
    fi
}

command_listener() {
    while IFS= read -r command; do
        command=${command#/}

        case "$command" in
            "")
                continue
                ;;

            stop)
                echo "Получена команда stop"

                if has_server; then
                    send_command "stop"
                fi

                echo "Таймер перезапуска отменён"
                kill -TERM "$MAIN_PID"
				exit 0
                ;;

            start)
                echo "Получена команда start"
                start_server
                ;;

            *)
                if has_server; then
                    echo "Команда сервера: $command"
                    send_command "$command"
                else
                    echo "Сервер не запущен. Команда не отправлена: $command"
                fi
                ;;
        esac
    done
}

echo "Запуск сервера"
start_server

timer_loop() {
    while :; do
        CURRENT_HOUR=$(date +%H)

        if [ "$CURRENT_HOUR" -lt 12 ]; then
            RESTART_TIME=$(date -d "today 12:00" +%s)
            RESTART_LABEL="12:00"
        else
            RESTART_TIME=$(date -d "tomorrow 00:00" +%s)
            RESTART_LABEL="00:00"
        fi

        CURRENT_TIME=$(date +%s)
        WAIT_TIME=$((RESTART_TIME - CURRENT_TIME - 600))

        if [ "$WAIT_TIME" -gt 0 ]; then
            echo "Следующая перезагрузка в $RESTART_LABEL"
            sleep "$WAIT_TIME"
        fi

        notify "Сервер будет перезагружен через 10 минут"
        sleep 300

        notify "Сервер будет перезагружен через 5 минут"
        sleep 120

        send_command "backup start"
        notify "Запуск бэкапа сервера"
        notify "Сервер будет перезагружен через 3 минуты"
        sleep 120

        notify "Сервер будет перезагружен через 1 минуту"
        sleep 60

        send_command "save-all"
        notify "Сервер сохраняется и перезагрузится через 10 секунд"
        sleep 10

        send_command "stop"
        wait_for_stop
        start_server
    done
}

timer_loop &
TIMER_PID=$!

echo "Ввод Minecraft-команд запущен"
command_listener