// Необходимо написать программу, которая проверяет пользователя на знание таблицы умножения. Пользователь сам вводит два целых однозначных числа через promt. Затем вводит результат умножения и в результате должен увидеть на экране правильно он ответил или нет (результат вывести в alert)

// let a = prompt('vvedite chislo a');
// let b = prompt('vvedite chislo b');

// let c = prompt('vvedite proizvedenie');

// if (c == a * b) {
//     alert('verno')
//     } else {
//         alert('neverno');
//     }

// В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
// это число (в первую, вторую, третью или четвертую).  Решить задачу используя (switch)
    
// const n = +prompt('vvedite ot 0 do 59','');


    // if (n < 15)
    //     console.log('1 четверть часа');
       
    // if (n >= 15 && n < 30)
    //     console.log('2 четверть часа');
       
    // if (n >=30 && n < 45)
    //     console.log('3 четверть часа');
        
    // if (n >= 46 && n < 59)
    //     console.log('4 четверть часа');


// const n = +prompt('vvedite ot 0 do 59','');
// switch (n) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//         alert('1 четверть часа');
//         break;
//     case 15:
//     case 29:
//         alert('2 четверть часа');
//         break;
//     case 30: 
//     case 44:
//         alert('3 четверть часа');
//         break;
//     case 45:
//     case 59:
//         alert('4 четверть часа');
// }


// Дана строка состоящая из символов, например ‘abcde’. Проверить, что первым символом этой строки является буква ‘a’. Если это так вывести слова ‘да’, в противном случае выведите ‘нет’

// let str = 'abcde';
//     if (str[0] == 'a') {console.log('da')
// } else {
//     console.log('net');
//     }


// Дана строка с цифрами, например ‘123456’. Проверить, что первым символом этой строки является цифра 1, 2 или 3. Если это так – выведите да’, в противном случае выведите ‘нет’.
// ЗАПРЕЩЕНО использовать if – более одного раза, также нельзя использовать switch.


// let str1 = '123456';
// if (str1[0] == '1' || str1[0] == '2' || str1[0] == '3') {
//     console.log('da')
// } else {
//     console.log('net')
// }


// Дана строка из 3-цифр.  Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий. Решить задачу двумя способами

// let str2 = '456';
//     summ = 0;
// // console.log(typeof(str2));
// // summ = Number(str2[0]) + Number(str2[1]) + Number(str2[2]);
// // console.log(summ);

// for (let i = 0; i <str2.length; i++) {
//     summ += Number(str2[i]);
// }
// console.log(summ);


// Если переменная а6 равна 0 или 2, то прибавить ей 7, иначе поделить ее на 10. Вывести новое значения переменной на экран

// let a = +prompt('vvedite chislo');
// if (a == 0 || a == 2) {
//     console.log(a+7);
// } else {
//     console.log(a/10);
// }

// Есть имя Stive
// Если возраст Stive:
// от 0 до 12 - вывести Steve is a child
// с 12 до 18 - вывести Steve is a teenager
// иначе 
// - вывести Steve is an adult

// Решить задачу 3 – способами:
// 1 if-else
// 2 switch.
// 3 Условный (тернарный) оператор

// if (age >= 0 && age <= 12) {
//     console.log('Steve is a child')
// } else {
//     if (age > 12 && age <= 18) {console.log('Steve is a teenager')}
//  else {
//     console.log('Steve is an adult')
// }
// };


// switch (age) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//         alert('Steve is a child');
//         break;

//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//         alert('Steve is a teenager');
//         break;
//     default:
//         alert('Steve is an adult');
//         break;
// }

// let name = 'Stive';
// let age = +prompt('vvedi vozrast','');
// let result;
// result = (age >= 0 && age <=12) ? (console.log('вывести Steve is a child')): false;
// result = (age > 12 && age <= 18) ? (console.log('Steve is a teenager')): false;
// result = (age > 18) ? (console.log('Steve is an adult')): false;


// Пользователь вводит два числа. Найти и вывести (в alert) максимальное из двух чисел. Учтите вариант равенства чисел
// let ch1 = +prompt('vvedite chislo 1','');
// let ch2 = +prompt('vvedite chislo 2','');

// if (ch1 < ch2) console.log('bolshee', ch2);
// if (ch1 > ch2) console.log('bolshee', ch1);
// if (ch1 === ch2) console.log('ravny');


// Даны две переменные x и y. При помощи тернарного оператора сравните их и если x больше, чем y, то выведите фразу: "x больше, чем y", иначе выведите фразу: "x не больше, чем y".

// let x= +prompt('vvedite chislo 1','');
// let y = +prompt('vvedite chislo 2','');
// let result;
// result = (x > y) ? console.log(x, 'больше, чем', y) : console.log(x, 'ne больше, чем', y);


// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто «лягут» на третью и треугольника не получится.
// Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию if..else (один раз), напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.

// let x= +prompt('vvedite storonu treugolnika 1','');
// let y = +prompt('vvedite storonu treugolnika 2','');
// let z= +prompt('vvedite storonu treugolnika 3','');

// if  ((x + y > z) || (z + y > x) || (x + z > y)) {
//     console.log('treugolnik sushestvuet')
// } else {
//     console.log('zakon matematiki narushen')
// };