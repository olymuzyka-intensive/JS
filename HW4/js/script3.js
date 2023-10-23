
let arr = [];
alert('введите элементы массива от 23 до 57','');
while(true) {
    let n = +prompt('ввод данных');
    if ((n < 23) || (n > 57) || n ==='') {
        alert('внимание, числа нужны из диапазона от 23 до 57, ввод завершен'); break
    }
    
    arr.push(+n);
}

console.log('исходный массив',arr);

let arr3 = [];
alert('введите элементы второго массива от 23 до 57','');
while(true) {
    let m = +prompt('ввод данных');
    if ((m < 23) || (m > 57) || m ==='') {
        alert('внимание, числа нужны из диапазона от 23 до 57, ввод завершен'); break
    }
    
    arr3.push(+m);
}
console.log('исходный массив',arr3);


let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}

console.log('сумма элементов первого массива',result);