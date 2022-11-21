/**
 * --------------- ПРИМЕР ------------------- *
 *                 PROMISE
 * ---------- rejsect resolve --------------- *
 * ------------------------------------------ *
 */

let promise = new Promise((resolve, reject) => {
    // создание промиса
    // Какая-то логика которая выполняется в промисе
    const prompt = window.prompt('введите число от 1 до 3')

    if (prompt == 2) {
        resolve('Правильно') // колбек при успешном выполнении
    } else {
        reject('Неправильно') // колбек при ошибке
    }
    // и немного подожем
    setTimeout(() => {}, 6000);
});

// вызывается всегда первым
alert('befor chain');

promise
    .then((result) => { // выполнится после "успешного" выполения промиса(когда выполнится resolve('Правильно') )
        alert(result);
        return 'Результат из первого вычисления или обработки данных'
    }, (error) => { // выполнится после "неудачного" выполения промиса(когда выполнится reject('Неправильно') )
        alert(error);
        return 'Результат обработки reject';
    })
    .then((result) => {
        alert(result); // цепочка then-ов может быть очень длинной
        return 'Результат обработки данных предыдущего then';
    })
    .catch((error)=> {
        alert(error); // catch - выполнится после ошибки(когда выполнится reject('Неправильно') )
        return 'error catch';
    })
    .then(() => {
        // ошибка в новом промисе не отлавливается в catch выше
        let newPromise = new Promise((resolve, reject) => { reject('Ошибка в новом промисе') })
        newPromise.catch((err) => alert(err));
        alert('then в котором новый промис отработал с ошибкой');
    })
    .finally(() => {
        alert('the end of chain'); // finally - выполняется после всех then и catch
    });

setTimeout(() => {
    alert('after chain and 6 sec'); // вызывается всегда последним
}, 6000);
alert('after chain no timeout'); // вызывается до получения промиса