/**
 * -------------- ПРИМЕР -------------------- *
 *              ГЕНЕРАТОР
 * -------------- yield ----------- *
 */
// есть вложенный массив:
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// чтоб перебрать и вывести все четные числа по отдельности
// необходимо сделать вложенный цикл

for (let subArr of arr) {
    for (let num of subArr) {
        if (num % 2 === 0) {
            console.log(num)
        }
    }
}
// реализуем через генератор
function* generator(arr) {
    for (let subArr of arr) {
        for (let num of subArr) {
            if (num % 2 === 0) {
                yield num
            }
        }
    }
}

for (let num of generator(arr)) {
    console.log(num)
}