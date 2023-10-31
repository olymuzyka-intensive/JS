//1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены
 let str = 'aaa@bbb@ccc';
 let regular =/@/g;
 let result = str.replace(regular,'!')
console.log(result);


// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. 
let date = '2025-12-31';
let arr = date.split('-');
let newDate = arr[2] + '/' + arr[1] + '/' + arr[0];

console.log('исходная дата', date);
console.log('дата в другом формате', newDate);