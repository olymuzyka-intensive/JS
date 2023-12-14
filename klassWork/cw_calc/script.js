function func(){
    let result;
    let num1 = parseInt(document.querySelector('#digit1').value);
    let num2 = parseInt(document.querySelector('#digit2').value);
    let option = document.querySelector('#calc_operation').value;

    switch (option) {
        case 'ad': 
            result = num1 + num2;
            break;
        case 'minus': 
            result = num1 - num2;
            break;
        case 'divide': 
            result = num1 / num2;
            break;   
        case 'multiply': 
            result = num1 * num2;
            break;
        }
        document.querySelector('#result').innerHTML = result;

}





