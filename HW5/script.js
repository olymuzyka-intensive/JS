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
function poiskMin() {
    if (a > b) {console.log('min',b)
    } else console.log('min',a);
}
function poiskMax() {
    if (a < b) {console.log('max',b)
    } else console.log('max',a);
}
    
// let a = +prompt('введите число', '');
// let b = +prompt('введите число', '')
// console.log('введены числа',a,b);

// poiskMin();
// poiskMax();


// 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив

// let n = prompt('введите количество элементов');
// let array = [];
// function createArray() {
    
//     for (let i = 1; i <= n; i++) {
//         array.push(i);
//     }
//     return array; 
// }
// function showArray() {
//     console.log(array)
// }    

// createArray();
// showArray();


//  5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.

// let a = prompt('vvedite chislo');
//     if (a % 1 == 0) {
//         alert('проверка на целое число пройдена')
//     } else {
//         alert('число не целое'); 
// //     }
// function isEven(param) {
    
//     if (a % 2 == 0 ) {
//         param = true
//     } else {
//         param = false
//     }
//     console.log(param)
// }

// isEven();



// 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let n = prompt('введите количество элементов');
// let array = [];
// newArray = [];
function find() {
for (let i = 1; i <= n; i++) {
    array.push(i);
}
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {  // не придумала как верно реализовать isEven не работает как нужно
        newArray.push(array[i]);
        
    }
}
console.log(newArray);
}
// find();



// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы): 
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ,кроме пробела, то пирамида должна быть нарисована этим символом

let k = prompt('введите кол-во рядов (не больше 9)');
let str = '';
function piramida(k,s){
    for (let i = 0; i <= k; i++) {
        str += '\n';
        for (let j = 0; j < i; j++ ) {
            str += i;
        }
    }
    console.log(str);
    }
piramida(k);
// эксперимент с другим символом не удался :() 

