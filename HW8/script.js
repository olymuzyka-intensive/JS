let body = document.body;
body.style.backgroundColor = '#fff'; // для видимости
body.style.padding = '10%';
body.style.margin = '0';
body.style.width = '1280px';
body.style.height = '880px';


let lang = document.createElement('lang');
lang.setAttribute('lang', 'ru');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8')

let title = document.createElement('title');
title.innerHTML = 'HW8';
document.head.appendChild(title);
document.head.appendChild(lang);
document.head.appendChild(metaUtf8);

let div = document.createElement('div');
div.classList.add('header');
document.body.appendChild(div);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
h1.className = 'header__title';

h1.style.fontFamily = 'Arvo';
h1.style.color = '#212121';
h1.style.fontSize = '36px';
h1.style.fontWeight = '400';
h1.style.lineHeight = '48px';
h1.style.textAlign = 'center';

div.appendChild(h1);
document.body.appendChild(div);

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.className = 'header__text';
div.appendChild(p1);
document.body.appendChild(div);

p1.style.fontFamily = 'OpenSans';
p1.style.color = '#9FA3A7';
p1.style.fontSize = '14px';
p1.style.fontWeight = '400';
p1.style.lineHeight = '26px';
p1.style.textAlign = 'center';


let div1 = document.createElement('div');
div1.className = 'promo';
body.appendChild(div1)
// document.body.appendChild(div1);
div1.style.display = 'flex';
div1.style.width = '800px';
div1.style.height = '480px';
div1.style.paddingTop = '55px';
div1.style.margin = 'auto';
div1.style.textAlign = 'center';


let div2 = document.createElement('div');
div2.className = 'promo__item1';
div1.appendChild(div2);
// document.body.appendChild(div1);
div2.style.display = 'flex';
div2.style.flexDirection = 'column';
div2.style.backgroundColor = '#fff';
div2.style.border = '1px solid rgba(232, 233, 237, 1)'


let div3 = document.createElement('div');
div3.className = 'promo__item2';
div1.appendChild(div3);
// document.body.appendChild(div1);
div3.style.display = 'flex';
div3.style.flexDirection = 'column';
div3.style.backgroundColor = '#8F75BE';


let p2 = document.createElement('p');
p2.className = 'promo__item1_title';
p2.innerHTML = 'FREELANCER';
div2.appendChild(p2);
// document.body.appendChild(div2);
p2.style.paddingTop = '80px';
p2.style.paddingBottom = '20px';
p2.style.color = '#9FA3A7';
p2.style.fontFamily = 'Montserrat';
p2.style.fontSize = '12px';
p2.style.fontWeight = '700';
p2.style.letterSpacing = '2.4px'


let h2_1 =document.createElement('h2');
h2_1.className = 'promo__item1_sub';
h2_1.innerHTML = 'Initially designed to';
div2.appendChild(h2_1);
// document.body.appendChild(div2);
h2_1.style.color = '#212121';
h2_1.style.fontFamily = 'Arvo';
h2_1.style.fontSize = '36px';
h2_1.style.fontWeight = '400';
h2_1.style.lineHeight = '46px'

let p4 = document.createElement('p');
p4.className = 'promo__item1_text';
p4.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div2.appendChild(p4);
// document.body.appendChild(div2);
p4.style.padding = '25px 95px 55px 95px';
p4.style.color = '#9FA3A7';
p4.style.fontFamily = 'OpenSans';
p4.style.fontSize = '12px';
p4.style.fontWeight = '400';
p4.style.lineHeight = '22px'


let button1 = document.createElement('button');
button1.className = 'btn'
button1.innerHTML = 'START HERE';
div2.appendChild(button1);
// document.body.appendChild(div2);
button1.style.padding = '8.5px 14.5px';
button1.style.border = '3px solid #FFC80A';
button1.style.width = '147px';
button1.style.alignSelf = 'center';

let p3 = document.createElement('p');
p3.className = 'promo__item2_title';
p3.innerHTML = 'STUDIO';
div3.appendChild(p3);
// document.body.appendChild(div3);
p3.style.paddingTop = '80px';
p3.style.paddingBottom = '20px';
p3.style.color = '#FFC80A';
p3.style.fontFamily = 'Montserrat';
p3.style.fontSize = '12px';
p3.style.fontWeight = '700';
p3.style.letterSpacing = '2.4px'


let h2_2 =document.createElement('h2');
h2_2.className = 'promo__item2_sub';
h2_2.innerHTML = 'Initially designed to';
div3.appendChild(h2_2);
// document.body.appendChild(div3);
h2_2.style.color = '#fff';
h2_2.style.fontFamily = 'Arvo';
h2_2.style.fontSize = '36px';
h2_2.style.fontWeight = '400';
h2_2.style.lineHeight = '46px'

let p5 = document.createElement('p');
p5.className = 'promo__item2_text';
p5.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div3.appendChild(p5);
// document.body.appendChild(div3);
p5.style.padding = '25px 95px 55px 95px';
p5.style.color = '#fff';
p5.style.fontFamily = 'OpenSans';
p5.style.fontSize = '12px';
p5.style.fontWeight = '400';
p5.style.lineHeight = '22px'

let button2 = document.createElement('button');
button2.className = 'btn'
button2.innerHTML = 'START HERE';
div3.appendChild(button2);
// document.body.appendChild(div3);
button2.style.padding = '8.5px 14.5px';
button2.style.border = '3px solid #FFC80A';
button2.style.width = '147px';
button2.style.alignSelf = 'center';


