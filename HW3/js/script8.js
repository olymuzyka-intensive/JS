let i = 0,
    s = 0,
    ch;
        while ((ch = +prompt("Введите число")) !== "0" && ch != '') {
            ++i;
            s += +ch; 
                    // if (typeof ch === "Number") 
                    // if (!Number.isFinite(ch)) 
            if (isNaN(ch)) {
                alert("ошибка ввода")
              } else {
                if (ch < 0)
                {alert("Вы ввели отрицательное число")}
              } 
        }
        
        
       
          
          alert("Сумма чисел: " + s + "\n" + "Среднее арифметическое: " + (s / i));