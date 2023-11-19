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

document.body.appendChild(h1);
document.body.appendChild(p1);


let div1 = document.createElement('div');
div1.classList.add('promo');
document.body.appendChild(div1);


let div2 = document.createElement('div');
div2.className = 'promo__item1';
div1.appendChild(div2);
document.body.appendChild(div1);

let div3 = document.createElement('div');
div3.className = 'promo__item2';
div1.appendChild(div3);
document.body.appendChild(div1);

let h2_1 =document.createElement('h2');
h2_1.className = 'promo__item1_sub';
h2_1.innerHTML = 'Initially designed to';
div2.appendChild(h2_1);
document.body.appendChild(div2);

let p2 = document.createElement('p');
p2.className = 'promo__item1_title'
p2.innerHTML = 'FREELANCER';
div2.appendChild(p2);
document.body.appendChild(div2);

let p4 = document.createElement('p');
p4.className = 'promo__item1_text'
p4.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div2.appendChild(p4);
document.body.appendChild(div2);

let button1 = document.createElement('button');
button1.className = 'btn'
button1.innerHTML = 'START HERE';
div2.appendChild(button1);
document.body.appendChild(div2);



let h2_2 =document.createElement('h2');
h2_2.className = 'promo__item2_sub';
h2_2.innerHTML = 'Initially designed to';
div3.appendChild(h2_2);
document.body.appendChild(div3);

let p3 = document.createElement('p');
p3.className = 'promo__item2_title'
p3.innerHTML = 'STUDIO';
div3.appendChild(p3);
document.body.appendChild(div3);

let p5 = document.createElement('p');
p5.className = 'promo__item2_text'
p5.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div3.appendChild(p5);
document.body.appendChild(div3);

let button2 = document.createElement('button');
button2.className = 'btn'
button2.innerHTML = 'START HERE';
div3.appendChild(button2);
document.body.appendChild(div3);
