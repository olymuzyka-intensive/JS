let i = 0,
    s = 0,
    ch;
        while ((ch = +prompt("Введите число")) !== "0" && ch != '') {
            ++i;
            s += +ch; 
            if (isNaN(ch)) {
                alert("ошибка ввода")
              } else {
                if (ch < 0)
                {alert("Вы ввели отрицательное число")}
              } 
        }
        // if (typeof ch === "Number") 
        // if (!Number.isFinite(ch)) 
        
       
          
          alert("Сумма чисел: " + s + "\n" + "Среднее арифметическое: " + (s / i));