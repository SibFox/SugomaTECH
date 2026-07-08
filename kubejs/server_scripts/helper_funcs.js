/**
 * Парсит значение компонента рекурсивно.
 * Возвращает число, строку (без кавычек) или словарь (объект).
 */
function parseComponentValue(str) {
    str = str.trim()

    // Вложенный словарь: { key: value, key2: value2, ... }
    if (str.startsWith('{') && str.endsWith('}')) {
        return parseDict(str.slice(1, -1))
    }

    // Строка в двойных кавычках: "some:value"
    if (str.startsWith('"') && str.endsWith('"')) {
        return str.slice(1, -1)
    }

    // Число
    let num = Number(str)
    if (!isNaN(num) && str !== '') {
        return num
    }

    // Всё остальное — возвращаем строку как есть
    return str
}

/**
 * Парсит содержимое словаря вида: key:val, key2:{...}, key3:"str"
 * Ключ и значение разделяются первым : вне кавычек и скобок.
 */
function parseDict(inner) {
    let result = {}
    let pairs = splitRespectingNesting(inner, ',')

    for (let pair of pairs) {
        let sepIndex = findFirstChar(pair, ':')
        if (sepIndex === -1) continue

        let key = pair.slice(0, sepIndex).trim()
        let val = pair.slice(sepIndex + 1).trim()

        result[key] = parseComponentValue(val)
    }

    return result
}

/**
 * Парсит блок компонентов внутри [ ... ].
 * Формат: namespace:key=value, namespace:key2=value2
 * Разделитель ключа и значения — всегда =
 */
function parseComponents(bracketContent) {
    let result = {}
    let entries = splitRespectingNesting(bracketContent, ',')

    for (let entry of entries) {
        let sepIndex = findFirstChar(entry, '=')
        if (sepIndex === -1) continue

        let key = entry.slice(0, sepIndex).trim()
        let val = entry.slice(sepIndex + 1).trim()

        result[key] = parseComponentValue(val)
    }

    return result
}

/**
 * Находит индекс первого вхождения символа ch вне кавычек и скобок.
 */
function findFirstChar(str, ch) {
    let depth = 0
    let inQuotes = false

    for (let i = 0; i < str.length; i++) {
        let c = str[i]

        if (c === '"' && str[i - 1] !== '\\') inQuotes = !inQuotes
        if (inQuotes) continue

        if (c === '{' || c === '[') depth++
        else if (c === '}' || c === ']') depth--
        else if (depth === 0 && c === ch) return i
    }

    return -1
}

/**
 * Разбивает строку по разделителю, игнорируя вложенные {} [] и ""
 */
function splitRespectingNesting(str, delimiter) {
    let parts = []
    let depth = 0
    let inQuotes = false
    let start = 0

    for (let i = 0; i < str.length; i++) {
        let c = str[i]

        if (c === '"' && str[i - 1] !== '\\') inQuotes = !inQuotes
        if (inQuotes) continue

        if (c === '{' || c === '[') depth++
        else if (c === '}' || c === ']') depth--
        else if (c === delimiter && depth === 0) {
            parts.push(str.slice(start, i))
            start = i + 1
        }
    }

    parts.push(str.slice(start))
    return parts.filter(p => p.trim() !== '')
}