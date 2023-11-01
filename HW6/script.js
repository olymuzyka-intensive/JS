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

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

function mathSumCub(){
    let array = [4, 2, 5, 19, 13, 0, 10];
    let cub = new Array;
    let sum = 0;
    let result = 0;
    
    for(i in array){
        cub[i] = Math.pow(array[i], 3);
    }
    console.log('массив кубов',cub);
    
    for (i = 0; i < cub.length;i++) {
        sum += cub[i];
    }
    console.log('сумма кубов',sum);

    result = Math.sqrt(sum);
    console.log('результат, корень квадратный из полученной суммы', result);
    console.log('округлим результат', result.toFixed(3));
}
mathSumCub();

//  5.  Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

function absResult(a,b) {
    let c = Math.abs(a - b); 
    console.log(c);
}
absResult(3,5);
absResult(6,1);