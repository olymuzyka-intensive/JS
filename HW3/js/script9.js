let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let b='', min, max;
for (let i = 0; i < str.length; i++) {
  b += str[i];
  if (+str[i] && !+str[i+1]) {
    if (typeof min !== 'number' || b < +min) min = +b;
    if (typeof max !== 'number' || b > +max) max = +b;
    b = '';
  }
}
console.log('Minimum:', min, 'Maximum:', max)





// const st = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
// // const numbers = str.match(/d+/g)
// let str = st.toString().split('');
// let max = str[0];
// console.log(st);
// console.log(str);
// for (let i = 0; i <= str.length; i++) {
//     if (max < str[i]) {
//         max = str[i];
//     }
// }
//     console.log('максимум',max);

// let min = str[0];
// for (let i = 0; i <= str.length; i++) {
//     if (min > str[i]) {
//         min = str[i];
//     }
// }
// console.log('минимум',min);