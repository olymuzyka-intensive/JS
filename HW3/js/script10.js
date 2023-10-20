// если число дано строкой
let n = prompt('vvedite chislo','');
console.log(n, typeof(n)); //проверка типа
//a
let a = n.toString().split(''); //другого метода, кроме преобразования в массив не придумала
console.log(a);

//b c
let num = n.length;
let summ = 0;
let newStr="";
for (let i = 0; i < num; i++) {
    summ += Number(a[i]);}
console.log('kolichestvo',num);
console.log('summa',summ);

for (let i = num - 1; i >=0; i--) {
   newStr += n[i];
}

console.log(newStr)

