const Book = function(title = '', category = '', author = '', rating = ''){
    this.title = title;
    this.category = category;
    this.author = author;
    this.rating = rating;


this.show = function(){
    console.log(`${this.title} ${this.author} (${this.category}) ${this.rating}`);
    // document.write ('<li><strong>${this.title}</strong>: <i>${this.category}</i><strong><i>${this.author}</i></strong><u>${this.rating}</u> </li>');
    }
}
const MyBooks = function(){
    this.data = [];

    this.add = function(Book = {}){
        this.data.push(Book);
    }

    this.show = function(){

        this.data.forEach(function(item){
            item.show();
        });

    }
};

function openForm() {
    document.getElementById("myForm").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

let add = document.querySelector('.btn-ok');
    add.addEventListener('click', function(){
        // if (!newLiTt.value){
        //     alert('заполните поле');
        //     return;
        // }
        // // if (!newLiAt.value){
        // //     alert('заполните поле');
        // //     return;
        // // }
        // // if (!newLiCt.value){
        // //     alert('заполните поле');
        // //     return;
        // // }
        // this.submit()
        addNewLi();
    });

let addLi = document.querySelector('.book_title');
    addLi.addEventListener('keyup', function(e){
        if (e.keyCode === 13 && this.value.length > 0) {
            addNewLi();
        }
    }) 
    let addLi2 = document.querySelector('.book_author');
    addLi2.addEventListener('keyup', function(e){
        if (e.keyCode === 13 && this.value.length > 0) {
            addNewLi();
        }
    })     
    let addLi3 = document.querySelector('.book_category');
    addLi3.addEventListener('keyup', function(e){
        if (e.keyCode === 13 && this.value.length > 0) {
            addNewLi();
        }
    })     
    let addLi4 = document.querySelector('.book_rating');
    addLi4.addEventListener('keyup', function(e){
        if (e.keyCode === 13 && this.value.length > 0) {
            addNewLi();
        }
    })  

let myBibl = document.querySelector('#books_list');

let clearALL = document.querySelector('.btn-rem');
let clearList = function(){
    myBibl.innerHTML = '';
}
clearALL.addEventListener('click', clearList);

function addNewLi () {
    let myBook = document.createElement('div');
    myBook.className = 'book_item';

    myBibl.appendChild(myBook);

    value = document.querySelector('.book_title').value;
    newLiTt = document.createElement('h2');
    newLiTt.innerHTML = `<h2>${value}</h2>`;
    myBook.appendChild(newLiTt); //добавление элемента


    value1 = document.querySelector('.book_author').value;
    newLiAt = document.createElement('h3');
    newLiAt.innerHTML = `<h3>${value1}</h3>`;
    myBook.appendChild(newLiAt); //добавление элемента

    value2 = document.querySelector('.book_category').value;
    newLiCt = document.createElement('h4');
    newLiCt.innerHTML = `<h4>${value2}</h4>`;
    myBook.appendChild(newLiCt); //добавление элемента

    value3 = document.querySelector('.book_rating').value;
    newLiRt = document.createElement('span');
    newLiRt.innerHTML = `<span>${value3}</span>`;
    myBook.appendChild(newLiRt); //добавление элемента

    let clear = document.querySelector('.book_title'); 
    clear.value = ''; //очищение поля после ввода
    let clear2 = document.querySelector('.book_author'); 
    clear2.value = ''; //очищение поля после ввода
    let clear3 = document.querySelector('.book_category'); 
    clear3.value = ''; //очищение поля после ввода
    let clear4 = document.querySelector('.book_rating'); 
    clear4.value = ''; //очищение поля после ввода

    let editLi = document.createElement('button');
    editLi.className = 'btn-edit';
    editLi.innerHTML = '&#10000';
    myBook.append(editLi);

    editLi.addEventListener('click', function(){
        editElem(myBook);
    }) 
    
}

function editElem (elem){
    let newValue = prompt ('изменить?');
    if (newValue.length == 0) return;

    let titElem = elem.querySelector('h2');
    titElem.innerHTML = newValue;
    let authorElem = elem.querySelector('h3');
    authorElem.innerHTML = newValue;
    let categoryElem = elem.querySelector('h4');
    categoryElem.innerHTML = newValue;
    let spanElem = elem.querySelector('span');
    spanElem.innerHTML = newValue;
}
                                                                                   
    




// let myBooks = new MyBooks();

// myBooks.add(new Book('Огненная вспышка','детектив','Ричард Старк', 5));
// myBooks.add(new Book('Воздушный витязь','проза','Игорь Соркин', 4));
// myBooks.add(new Book('Дракон Фенстонов','приключения','Анри Верн', 3));
// myBooks.add(new Book('Заколдованное счастье','поэзия','Лев Маляков', 5));
// myBooks.add(new Book('Игры теней','фантастика','Ерофей Трофимов', 5));
// myBooks.add(new Book('Пропавшие','детектив','Джейн Кейси', 4));
// myBooks.add(new Book('Книга чудес','проза','Натаниель Готорн', 4));
// myBooks.add(new Book('Разум океана','приключения','Станислав Гагарин', 5));
// myBooks.add(new Book('Мгновения Вечности','поэзия','Владимир Кевхишвили', 3));
// myBooks.add(new Book('Прибытие на Марс','фантастика','Иван Беров', 2));
// myBooks.show();
// let resultCategory = data.filter(function(item){
//     return item.category == 'проза'
// })

// console.log(resultCategory)
  