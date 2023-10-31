//1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены
 let str = 'aaa@bbb@ccc';
 let regular =/@/g;
 let result = str.replace(regular,'!')
console.log(result);


// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. 