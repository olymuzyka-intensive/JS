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
        // document.write('<ul>');

        this.data.forEach(function(item){
            item.show();
        });

        // document.write('</ul>');
    }
};

let myBooks = new MyBooks();

myBooks.add(new Book('Огненная вспышка','детектив','Ричард Старк', 5));
myBooks.add(new Book('Воздушный витязь','проза','Игорь Соркин', 4));
myBooks.add(new Book('Дракон Фенстонов','приключения','Анри Верн', 3));
myBooks.add(new Book('Заколдованное счастье','поэзия','Лев Маляков', 5));
myBooks.add(new Book('Игры теней','фантастика','Ерофей Трофимов', 5));
myBooks.add(new Book('Пропавшие','детектив','Джейн Кейси', 4));
myBooks.add(new Book('Книга чудес','проза','Натаниель Готорн', 4));
myBooks.add(new Book('Разум океана','приключения','Станислав Гагарин', 5));
myBooks.add(new Book('Мгновения Вечности','поэзия','Владимир Кевхишвили', 3));
myBooks.add(new Book('Прибытие на Марс','фантастика','Иван Беров', 2));

myBooks.show();

function openForm() {
    document.querySelector(".book_add").style.display = "block";
}

function closeForm() {
    document.querySelector(".book_add").style.display = "none";
}

let myBibl = document.querySelector('#books_list');
let li = document.querySelector('li');

let add = document.querySelector('.btn-add');
    add.addEventListener('click', function(){
        addNewLi();
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
    newLi.innerHTML = `<h1>${value}</h1>`;
    myBibl.appendChild(newLi); //добавление элемента


    let input = document.querySelector('.book_title'); 
    input.value = ''; //очищение поля после ввода

    let editLi = document.createElement('button');
    editLi.className = 'btn-edit';
    editLi.innerHTML = '&#10000';
    newLi.append(editLi);

    editLi.addEventListener('click', function(){
        editElem(newLi);
    })   
}

function editElem (elem){
    let newValue = prompt ('изменить?');
    if (newValue.length == 0) return;

    let titElem = elem.querySelector('h1');
    titElem.innerHTML = newValue;
}

// let resultCategory = data.filter(function(item){
//     return item.category == 'проза'
// })


