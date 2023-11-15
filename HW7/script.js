// калькулятор
// let Calc = function() {
//     this.on = function(){
//         alert('калькулятор включен');
//     }
//     this.off = function(){
//         alert('калькулятор выключен');
//     }
//     this.get = function() {
//         this.a = +prompt('введите число a');
//         this.b = + prompt('введите число b');
//         this.oper = prompt('введите желаемую операцию: +, -, *, /');

//         this.decision();
//     };

//     this.decision = function() {
//         switch(this.oper){
//             case '+':
//                     this.result = this.a + this.b;
//             break;
//             case '-':
//                     this.result = this.a - this.b;
//             break;
//             case '*':
//                     this.result = this.a * this.b;
//             break;
//             case '/':
//                     this.result = this.a / this.b;
//             break;
//             default: this.result = 0;
//         }
//         this.write()
//     };

//     this.write = function() {
//         alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
//     };
// };

// let calc = new Calc();
// calc.on();
// calc.get();
// calc.off();


// лампочка
let lamp = function(name){
    this.get = function(){
        this.name = name;
        this.status = false; //выкл
        this.infoWatt = +prompt('укажите мощность лампочки'); //5, 9, 15, 18, 25, .. , 75 ,100
        this.infoTarif = 0.246; //кВт/ч
        this.timeOn;
        this.timeOff;  
        this.infoTime = 0; // минут если указать число в консоли ответ сразу иду в консоль

        this.cost();
    }
    this.onOff = function(){ 
        this.status = !this.status; //вкл/выкл

        if (this.status) this.timeOn = new Date();
        this.timeOff = new Date();
        this.infoTime = this.timeOff - this.timeOn;
    }

    this.cost = function(){ //подсчет стоимости электроэнергии
        this.result =  (this.infoWatt / 1000) * (this.infoTime/60) * this.infoTarif;
        
        this.write();
        
    }

    this.write = function(){

        console.log('лампочка ' + this.name  + ' была включена ' + this.infoTime + ' минут/часов ' + ' стоимость электроэнергии ' +this.result);
    }    
}

let lamp1 = new lamp('лампочка 1');  
lamp1.get();

// let lamp2 = new lamp('лампочка 2');  
// lamp2.get();


console.log(lamp1);
// console.log(lamp2);
