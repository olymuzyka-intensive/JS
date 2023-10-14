let dni=prompt('введите количество дней', '');
let year = dni / 365;
let month = dni / 31;
let week = dni / 7;
let hour = dni * 24;
let minute = hour * 60;
let sec = minute * 60;




console.log('в введенном количестве дней ' + dni + ''); 
if ( dni < 365) {console.log('Меньше года')} else {console.log(year + ' лет ')}; 
if ( dni < 31) {console.log('Меньше месяца')} else {console.log(month + ' месяцев ')}; 
if ( dni < 7) {console.log('Меньше недели')} else {console.log(week + ' недель ')}; 
console.log(hour + ' часов '); 
console.log(minute + ' минут '); 
console.log(sec + ' секунд ' );
