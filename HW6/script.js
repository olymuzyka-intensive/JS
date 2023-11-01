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

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).



let str1 = 'Я учу javascript!';
let result1 = str1.substring(0,1)+str1.substring(16,17);

let str2 = 'Я учу javascript!';
let result2 = str2.substr(0,1) + str2.substr(16,1);

let str3 = 'Я учу javascript!';
let result3 = str3.slice(0,1)+str3.slice(16,17);
console.log(result1);
console.log(result2);
console.log(result3);