let month_years = month % 12;
    month_year = Math.round(month_years);
    console.log('месяц года', month_year);

switch (month_year) {
case 1:
case 2: 
    console.log ('зима');
    break;

case 3: 
case 4:
case 5: 
    console.log ('весна');
    break;

case 6: 
case 7:
case 8: 
    console.log ('лето');
    break;
   
case 9: 
case 10:
case 11: 
    console.log ('осень');
    break;   

case 12: 
    console.log ('зима');
    break;
}
