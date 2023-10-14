let dni=prompt('введите количество дней', '');
let year = dni / 365;
let month = year / 12;
let week = month / 4.33;
let hour = week / 168;
let minute = hour / 60;
let sec = minute / 60;

document.write('в введенном количестве дней ' + dni + ' '); 
if ( dni < 325) (console.log('Меньше года')) ||  (document.write((year + ' лет ')) &&  document.write((month + ' месяцев ')) && document.write((week + ' недель ')));
if ( dni < 31) (console.log('Меньше месяца')) ||  (document.write((month + ' месяцев ')) && document.write((week + ' недель ')))
if ( dni < 7) (console.log('Меньше недели')) ||  (document.write((week + ' недель '))); 
document.write(hour + ' часов '); document.write(minute + ' минут '); document.write(sec + ' секунд ' );



// document.write('в введенном количестве дней ' + dni + ' '); 
// if ( dni < 325) console.log('Меньше года') ||  document.write((year + ' лет ')); 
// if ( dni < 31) console.log('Меньше месяца') ||  document.write((month + ' месяцев ') ); 
// if ( dni < 7) console.log('Меньше недели') ||  document.write((week + ' недель ') ); 
// document.write(hour + ' часов '); 
// document.write(minute + ' минут '); 
// document.write(sec + ' секунд ' );
