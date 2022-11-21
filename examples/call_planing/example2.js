/**
* -------------- ПРИМЕР -------------------- *
*             SETINTERVAL
* Непрерывное выполнение через заданные промежутки времени
* ------------------------------------------ *
*/
let delay = 2000 // 2000 мс или 2сек
function displayCurrentDate(phrase) {
    // получение текущей даты
    const date = new Date().toTimeString()
    console.log(`${phrase} ${date}`)
}
// запускается спустя 2сек(timeout = 2000)
// и повторяется каждые 2 сек,
let testInterval = setInterval(displayCurrentDate, delay, 'Время');
// остановка таймаута и интервала
//clearInterval(testInterval)
