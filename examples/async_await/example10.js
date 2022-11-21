/**
 * -------------- ПРИМЕР -------------------- *
 *              ASYNC AWAIT
 * ------------------------------------------ *
 */
function sum(a,b) {
    return new Promise(
        resolve => setTimeout(resolve, 1000, a + b)
    )
}
// и с ее помощью надо сложить числа 1,2,3,4
// вот как реализовали бы через классический подход
function fun() {
    sum(1, 2).then((result1) => {
        sum(result1, 3).then((result2) => {
            sum(result2, 4).then((result3) => {
                console.log(result3)
            })
        })
    });
}
fun(); // 10

// а вот как с помощью async/await
async function fun2() {
    let result1 = await sum(1, 2);
    let result2 = await sum(result1, 3);
    console.log(await sum(result2, 4));
}
fun2(); // 10


