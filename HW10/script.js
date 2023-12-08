const Book = function(title = '', category = '', author = '', rating = ''){
    this.title = title;
    this.category = category;
    this.author = author;
    this.rating = rating;


this.show = function(){
    console.log(`${this.title} ${this.author} (${this.category}) ${this.rating}`);
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

let addLi = document.querySelector('.book_title');

let add = document.querySelector('.btn-ok');
    add.addEventListener('click', function(){
        if (addLi.value.length > 0) addNewLi();
    });

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
    let myBook = document.createElement('li');
    myBook.className = 'book_item';

    myBibl.appendChild(myBook);

    value = document.querySelector('.book_title').value;
    newLiTt = document.createElement('div');
    newLiTt.classList.add ('title');
    newLiTt.innerHTML = `<div>${value}</div>`;
    myBook.appendChild(newLiTt); //добавление элемента


    value1 = document.querySelector('.book_author').value;
    newLiAt = document.createElement('div');
    newLiAt.classList.add ('author');
    newLiAt.innerHTML = `<div>${value1}</div>`;
    myBook.appendChild(newLiAt); //добавление элемента

    value2 = document.querySelector('.book_category').value;
    newLiCt = document.createElement('div');
    newLiCt.classList.add ('category');
    newLiCt.innerHTML = `<div>${value2}</div>`;
    myBook.appendChild(newLiCt); //добавление элемента

    value3 = document.querySelector('.book_rating').value;
    newLiRt = document.createElement('span');
    newLiRt.classList.add ('rating');
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

    function editElem (elem){
        let newValue = [];
    
        for (let i=1; i <= 4; i++) {
            let result = prompt('новое значение');
             newValue.push(result);
        }
        let titElem = elem.querySelector('.title');
        titElem.innerHTML = newValue[0];
        let authorElem = elem.querySelector('.author');
        authorElem.innerHTML = newValue[1];
        let categoryElem = elem.querySelector('.category');
        categoryElem.innerHTML = newValue[2];
        let spanElem = elem.querySelector('span');
        spanElem.innerHTML = newValue[3];
    
    }

    let delLi = document.createElement('button');
    delLi.className = 'btn-del';
    delLi.innerHTML = '&#9988;';
    myBook.append(delLi);

    delLi.addEventListener('click', function(){
        delElem(myBook);
    });

    function delElem (elem){
        elem.remove()
    }

    editLi.addEventListener('click', function(){
        editElem(myBook);

    }) 

    
}                                                         
    