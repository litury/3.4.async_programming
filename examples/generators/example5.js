/**
 * -------------- ПРИМЕР -------------------- *
 *              ГЕНЕРАТОР
 * -------------- yield ----------- *
 */
function* generator() {
    // yield может возвращать разные типы данных
    yield 1;
    yield 2;
    yield 2 + 1;
    return 4
}

const counter = generator();

console.log(counter);// "Generator { }"
console.log(counter.next());// следующий шаг генератора
// {value: 1, done: false}
console.log(counter.next());// следующий шаг генератора
// {value: 2, done: false}
console.log(counter.next());// следующий шаг генератора
// {value: 3, done: false}
console.log(counter.next());// следующий шаг генератора
// {value: 4, done: true}