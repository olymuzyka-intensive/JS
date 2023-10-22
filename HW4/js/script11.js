let res = '';
let n = 5;

for (let i = 1; i <= n; i++) {
        for (j = n; j >i; j--) {
            res +='';
        }
        for (j = 1; j <= i; j++) {
            res += '^'+ '';
        }
        res += '\n';
    }
console.log(res);



// for (let i = 1; i <= n; i++) {
//     for (j = 1; j < n - i; j++) {
//         res +='';
//     }
//     for (let j = 1; j <= i; j++) {
//         res += '^'+ '';
//     }
//     for (let k = 0; k <=2 * i - 1; k++){
//    console.log('^')
// }

// console.log('\n');
// }
