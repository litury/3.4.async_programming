/**
 * -------------- ПРИМЕР -------------------- *
 *              ГЕНЕРАТОР
 * -------------- yield ----------- *
 */
// а теперь пусть он будет более вложенный
let deepArr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

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

// можем просто воспользоваться генератором который уже есть
function* deepGenerator() {
    for (let arr of deepArr) {
        // данная конструкция будет возвращать все yield
        // вложенного генератора
        yield* generator(arr)
    }
}

for (let num of deepGenerator()) {
    console.log(num)
}
