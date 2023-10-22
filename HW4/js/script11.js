let res = '';
let n = 5;

for (let i = 1; i <= n; i++) {
    for (j = n; j >1; j--) {
        res +='';
    }
    for (j = 1; j <= i; j++) {
        res += '^'+ '';
    }
    res += '\n'
}

console.log(res);