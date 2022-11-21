/**
 * -------------- ПРИМЕР -------------------- *
 *              SETTIMEOUT
 * -------- Отложенное выполнение ----------- *
 */
let delay = 2000 // 2000 мс или 2сек

function displayCurrentDate(phrase) {
    const date = new Date().toTimeString() // получение текущей даты
    console.log(`${phrase} ${date}`)
}
// появляется спустя 2сек(timeout = 2000)
// Время: 12:00:11 GMT+0300 (Москва, стандартное время)
let testTimeot = setTimeout(displayCurrentDate, delay, "Время:")
 // в переменную testTimeot возвращаем timerId
 // если раскомментировать строку ниже - ничего не выведется
 // clearTimeout(testTimeot);