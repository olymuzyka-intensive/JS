// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.

// исследование 
// function calculation(otvet) {
//     alert ('для решения задачи нужно ввести 3 числа');
//     let a = prompt('введите число 1');
//     let b = prompt('введите число 2');
//     let c = prompt('введите число 3');

//     otvet = (a - b) / c;
//     alert(otvet);
// }
// calculation();

//решение
function calc(a, b, c){
    return (a - b)/c;
}
// console.log(calc(5,10,2))

// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром
//исследование
function calc2(ch){
    return (ch * ch);
}
function calc3(ch){
    return (ch * ch * ch);
}
// let ch = prompt('введите число', '')
// console.log(calc2(ch),calc3(ch));

// еще
// let ch = prompt('введите число', '')
function otvet(calc2, calc3){
    console.log(ch * ch);
    console.log(ch * ch * ch);
}
// otvet();

// 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b
// let a = +prompt('введите число', '');
// let b = +prompt('введите число', '')
// console.log('введены числа',a,b);
function poiskMin() {
    if (a > b) {console.log('min',b)
    } else console.log('min',a);
}
function poiskMax() {
    if (a < b) {console.log('max',b)
    } else console.log('max',a);
}
// poiskMin();
// poiskMax();


// 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив

// исследование
// function createArray() {
//     let n = prompt('введите количество элементов');
//     let array = [];
//     for (let i = 1; i <= n; i++) {
//         array.push(i);
//     }
//     console.log(array)
// }
// createArray();

function createArray() {
    let n = prompt('введите количество элементов');
    let array = [];
        for (let i = 1; i <= n; i++) {
        array.push(i);
        return (array);
    }
    function arr(){
        console.log(arr);
    }
}
createArray();