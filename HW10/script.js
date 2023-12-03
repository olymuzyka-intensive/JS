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
        addNewLi();
    });
let cancel = document.querySelector('.btn-cancel');
    cancel.addEventListener('click', function(){
        // myBibl.innerHTML = '';
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

let myBibl = document.querySelector('.books_list');

let clearALL = document.querySelector('.btn-rem');
let clearList = function(){
    myBibl.innerHTML = '';
}
clearALL.addEventListener('click', clearList);

function addNewLi () {
    let myBook = document.querySelector('.book_item');
    let newLi = document.createElement('div'); //создание элемента
    newLi.className = 'addLi';

    value = document.querySelector('.book_title').value;
    newLiTt = document.createElement('h2');
    newLiTt.innerHTML = `<h2>${value}</h2>`;
    myBibl.appendChild(newLiTt); //добавление элемента


    value1 = document.querySelector('.book_author').value;
    newLiAt = document.createElement('h3');
    newLiAt.innerHTML = `<h3>${value1}</h3>`;
    myBibl.appendChild(newLiAt); //добавление элемента

    value2 = document.querySelector('.book_category').value;
    newLiCt = document.createElement('h4');
    newLiCt.innerHTML = `<h4>${value2}</h4>`;
    myBibl.appendChild(newLiCt); //добавление элемента

    value3 = document.querySelector('.book_rating').value;
    newLiRt = document.createElement('span');
    newLiRt.innerHTML = `<span>${value3}</span>`;
    myBibl.appendChild(newLiRt); //добавление элемента

    let clear = document.querySelector('.book_title'); 
    clear.value = ''; //очищение поля после ввода
    let clear2 = document.querySelector('.book_author'); 
    clear2.value = ''; //очищение поля после ввода
    let clear3 = document.querySelector('.book_category'); 
    clear3.value = ''; //очищение поля после ввода
    let clear4 = document.querySelector('.book_rating'); 
    clear4.value = ''; //очищение поля после ввода

    
}

function editElem (elem){
    let newValue = prompt ('изменить?');
    if (newValue.length == 0) return;

    let titElem = elem.querySelector('h2');
    titElem.innerHTML = newValue;
}

// let resultCategory = data.filter(function(item){
//     return item.category == 'проза'
// })


let editLi = document.createElement('button');
    editLi.className = 'btn-edit';
    editLi.innerHTML = '&#10000';
    newLi.append(editLi);

    editLi.addEventListener('click', function(){
        editElem(newLi);
    })   