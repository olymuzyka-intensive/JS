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
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

let myBibl = document.querySelector('#books_list');
let li = document.querySelector('li');

let add = document.querySelector('.btn-ok');
    add.addEventListener('click', function(){
        addNewLi();
    });
let cancel = document.querySelector('.btn-cancel');
    cancel.addEventListener('click', function(){
        return;
    });    

let addLi = document.querySelector('.book_title');
    addLi.addEventListener('keyup', function(e){
        if (e.keyCode === 13 && this.value.length > 0) {
            addNewLi();
        }
    })    

let clearALL = document.querySelector('.btn-rem');
let clearList = function(){
    myBibl.innerHTML = '';
}
clearALL.addEventListener('click', clearList);

function addNewLi () {
    let newLi = document.createElement('li'); //создание элемента
    newLi.className = 'addLi';

    value = document.querySelector('.book_title').value;
    newLiTt = document.createElement('h2');
    newLiTt.innerHTML = `<h2>${value}</h2>`;
    newLi.appendChild(newLiTt); //добавление элемента

    value1 = document.querySelector('.book_author').value;
    newLiAt = document.createElement('h3');
    newLiAt.innerHTML = `<h3>${value1}</h3>`;
    newLi.appendChild(newLiAt); //добавление элемента

    value2 = document.querySelector('.book_category').value;
    newLiCt = document.createElement('h4');
    newLiCt.innerHTML = `<h4>${value2}</h4>`;
    newLi.appendChild(newLiCt); //добавление элемента

    value3 = document.querySelector('.book_rating').value;
    newLiRt = document.createElement('span');
    newLiRt.innerHTML = `<span>${value3}</span>`;
    newLi.appendChild(newLiRt); //добавление элемента


    // let input = document.querySelector('li'); 
    // input.value = ''; //очищение поля после ввода

    let editLi = document.createElement('button');
    editLi.className = 'btn-edit';
    editLi.innerHTML = '&#10000';
    newLi.append(editLi);

    // editLi.addEventListener('click', function(){
    //     editElem(newLi);
    // })   
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


