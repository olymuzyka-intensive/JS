//1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены
 let str = 'aaa@bbb@ccc';
 let regular =/@/g;
 let result = str.replace(regular,'!')
console.log(result); // 1 вариант решения
console.log(str.replace(/@/g, '!')) // 2 вариант решения

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. 
function formDate() {
    let date = new Date('2025-12-31');
    console.log('исходная дата', date);

    newDate = date.toLocaleString('ru');
    console.log('исходная дата', newDate);
    formatesDate = newDate.replace(/\./g,'/')
    console.log('дата в другом формате', formatesDate);
    console.log(formatesDate.split(', ')[0]);
}
formDate()
// 2 способ с использованием массива, просто оставила
// function formDate() {
//     let date = '2025-12-31';
//     let arr = date.split('-');
//     let newDate = arr[2] + '/' + arr[1] + '/' + arr[0];

//     console.log('исходная дата', date);
//     console.log('дата в другом формате', newDate);
// }
// formDate()

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


// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)

function addNum(value) {
        if (value <= 9) return '0'+ value;
        return value;
    }

function formatDate() {
    let today = new Date();
    console.log(today);

    let strDate = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' ' + addNum(today.getDate())+ '.' + addNum(today.getMonth()+1) + '.' + today.getFullYear();

    
    console.log(strDate);
}


formatDate();


// просто пробовала применить из видеоурока вариант, но перобразование как первом решении все равно оказалось нужным, оставила как эксперимент
let today1 = new Date();

let opt = {
    hour: 'numeric',
    minute: 'numeric',
    seconds: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
}
    console.log(today1.toLocaleString('ru', opt));

    // 7.  Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.

    let strReg = 'aa aba abba abbba abca abea';
    regexp = (/ab+a/g);

    // console.log(strReg.match(regexp));

    // 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения

    function checkPhone(phone){
        
        let regExp1 = (/\+?(375)\s?|-?\(?(29|25|44|33|017)\)?\s?|-?(\d{3}\s?-?\d{2}\s?-?\d{2})/g); // учитывает только набор в формате ххх-хх-хх
        return regExp1.test(phone);
    }

    console.log(checkPhone('+375(29)124-15-00')); 
   

    function checkPhone2(phone){

        let regExp2 = (/\+?(375)\s?\-?\(?(29|25|44|33|017)\)?\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]/g);  //первый эксперимент еще "лопатный", но работает чуть точнее с форматом, если пользователь ввел как хотел
        return regExp2.test(phone);
    }
    console.log(checkPhone2('+375(017)12-515-21')); 
