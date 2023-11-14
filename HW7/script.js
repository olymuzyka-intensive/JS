// калькулятор
let Calc = function() {
    this.on = function(){
        alert('калькулятор включен');
    }
    this.off = function(){
        alert('калькулятор выключен');
    }
    this.get = function() {
        this.a = +prompt('введите число a');
        this.b = + prompt('введите число b');
        this.oper = prompt('введите желаемую операцию: +, -, *, /');

        this.decision();
    };

    this.decision = function() {
        switch(this.oper){
            case '+':
                    this.result = this.a + this.b;
            break;
            case '-':
                    this.result = this.a - this.b;
            break;
            case '*':
                    this.result = this.a * this.b;
            break;
            case '/':
                    this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }
        this.write()
    };

    this.write = function() {
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    };
};

let calc = new Calc();
calc.on();
calc.get();

calc.off();


// лампочка

