//1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены
 let str = 'aaa@bbb@ccc';
 let regular =/@/g;
 let result = str.replace(regular,'!')
console.log(result); // 1 вариант решения
console.log(str.replace(/@/g, '!')) // 2 вариант решения

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. 
function formDate() {
    let date = '2025-12-31';
    console.log('исходная дата', date);

    console.log(date.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1'));
}
formDate()

// 2 способ, замороченный, но работает
// function formDate() {
//     let date = new Date('2025-12-31');
//     console.log('исходная дата', date);

//     newDate = date.toLocaleString('ru');
//     console.log('исходная дата', newDate);
//     formatesDate = newDate.replace(/\./g,'/')
//     console.log('дата в другом формате', formatesDate);
//     console.log(formatesDate.split(', ')[0]);
// }
// formDate()

// 3 способ с использованием массива, просто оставила
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


// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.
// Функция должна возвращать true или false. Используйте регулярные  выражения.

function checkEmail(email) {
    regExp3 = (/^(\D)(\w[^@]{2,})+@(\w{2,11})\.([a-z]{2,11})$/gim);
    return regExp3.test(email);
}

console.log(checkEmail('xvvd12@mail.by'));
console.log(checkEmail('2xvvd12@mail.by'));
console.log(checkEmail('xv_v.d12@mail.by'));
console.log(checkEmail('xv_v.d12mail.by'));
console.log(checkEmail('xv_v.d@12@mail.by')); // добилась наконец


// 10. Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив. //
function seachUrl(url){
    let domName = (url.match(/(https?:\/\/[\w\.]+)/gim)); //+
    console.log('адрес доменного имени', domName);
    let pchUrl =(url.match(/(\/[\w\/=.-]+)/gim));
    console.log('часть адреса без параметров и хеша',pchUrl);
    let param = (url.match(/(\?[\w\s?\-?\=?\%\[\][\]]+)?/gim)); //+
    let str = param;
    param = str.join(''); 
    console.log('параметры', param);
    let hesh = (url.match(/(\#[\w\-]+)?/gim)); //+
    let str2 = hesh;
    hesh = str2.join('');
    console.log('хеш', hesh);
}
seachUrl('https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile utm_medium=smartdo200#zag3');
seachUrl('https://www.21vek.by/services/insurance.html#addservices__208');
seachUrl('https://7745.by/catalog/televizory-s-diagonalyu-50-55-dyuymov?feature[brand][]=yandeks&feature[brand][]=philips');


// function seachUrl(url){
//     let domName = String(url.match(/(https?:\/\/[\w\.]+)/gim)); //+
//     console.log('адрес доменного имени', domName);
//     let pchUrl =String(url.match(/(\/[\w\/=.-]+)/gim));
//     console.log('часть адреса без параметров и хеша',pchUrl);
//     let param = String(url.match(/(\?[\w\s?\-?\=?\%\[\][\]]+)?/gim)); //+
//     console.log('параметры', param);
//     let hesh = String(url.match(/(\#[\w\-]+)?/gim)); //+
//     console.log('хеш', hesh);
// }
// seachUrl('https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile utm_medium=smartdo200#zag3');
// seachUrl('https://www.21vek.by/services/insurance.html#addservices__208');
// seachUrl('https://7745.by/catalog/televizory-s-diagonalyu-50-55-dyuymov?feature[brand][]=yandeks&feature[brand][]=philips');

// (https?:\/\/[a-z0-9\.]+)(\/[a-z0-9\/=.-]+)(\?[a-z0-9\s?\%\-?\_?\=?\\%\[\]]+)?(\#[a-z0-9-_]+)?
// /(https?:\/\/[\w\.]+)(\/[\w\/=.-]+)(\?[\w\s?\-?\=?\%\[\][\]]+)?(\#[\w\-]+)?/gim
 //работают, но проблема возникает с &!!
