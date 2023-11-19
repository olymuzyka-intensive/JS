let body = document.body;
document.body.style.backgroundColor = '#f4eccf7';
body.style.padding = '10%';
body.style.marginLeft = '0 auto';

let lang = document.createElement('lang');
lang.setAttribute('lang', 'ru');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8')

let title = document.createElement('title');
title.innerHTML = 'HW8';
document.head.appendChild(title);
document.head.appendChild(lang);
document.head.appendChild(metaUtf8);


let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

// const content1 = list.getElementsByClassName('promo');

let h2_1 =document.createElement('h2');
h2_1.innerHTML = 'Initially designed to';

let p2 = document.createElement('p');
p2.innerHTML = 'FREELANCER';

let h2_2 =document.createElement('h2');
h2_2.innerHTML = 'Initially designed to';


let p3 = document.createElement('p');
p3.innerHTML = 'STUDIO';

let p4 = document.createElement('p');
p4.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';

let p5 = document.createElement('p');
p5.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';

let button1 = document.createElement('button');
button1.innerHTML = 'START HERE';

let button2 = document.createElement('button');
button2.innerHTML = 'START HERE';






document.body.appendChild(h1);
document.body.appendChild(p1);

document.body.appendChild(p2);
document.body.appendChild(h2_1);
document.body.appendChild(p4);
document.body.appendChild(button1);

document.body.appendChild(p3);
document.body.appendChild(h2_2);
document.body.appendChild(p5);
document.body.appendChild(button2);



// let div1 = document.createElement('div')
// div1.classList.add('option')
// div1.appendChild(p1)

