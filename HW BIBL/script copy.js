let myBibl = document.querySelector('#books_list');
let filterTop = document.querySelector('.btn-filterTop');
let filterCategory = document.querySelector('.btn-filterCategory');
let inputFilter = document.querySelector('filter-category');
let resultFilter = document.querySelector('.filter_list');
let resultTop = document.querySelector('.top_list');
let clearALL = document.querySelector('.btn-rem');


function openForm() {
    document.getElementById("myForm").style.display = "flex";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

let clearList = function(){
    myBibl.innerHTML = '';
}
clearALL.addEventListener('click', clearList);

let addLi = document.querySelector('.book_title');
let addLi2 = document.querySelector('.book_author');
let addLi3 = document.querySelector('.book_category');
let addLi4 = document.querySelector('.book_rating');


let add = document.querySelector('.btn-ok');

    add.addEventListener('click', function(){
        
        if (addLi.value.length > 0) addNewLi();
    });

    addLi.addEventListener('keyup', function(e){
        if (e.keyCode === 13 && this.value.length > 0) {
            addNewLi();
        }
    }); 
    addLi2.addEventListener('keyup', function(e){
        if (e.keyCode === 13 && this.value.length > 0) {
            addNewLi();
        }
    });     
    addLi3.addEventListener('keyup', function(e){
        if (e.keyCode === 13 && this.value.length > 0) {
            addNewLi();
        }
    });     
    addLi4.addEventListener('keyup', function(e){
        if (e.keyCode === 13 && this.value.length > 0) {
            addNewLi();
        }
    });  

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
    newLiRt = document.createElement('div');
    newLiRt.classList.add ('rating');
    newLiRt.innerHTML = `<div>${value3}</div>`;
    myBook.appendChild(newLiRt); //добавление элемента

    let clear = document.querySelector('.book_title'); 
    clear.value = ''; //очищение поля после ввода
    let clear2 = document.querySelector('.book_author'); 
    clear2.value = ''; //очищение поля после ввода
    let clear3 = document.querySelector('.book_category'); 
    clear3.value = ''; //очищение поля после ввода
    let clear4 = document.querySelector('.book_rating'); 
    clear4.value = ''; //очищение поля после ввода

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

    // editLi.addEventListener('click', function(){
    //     editElem(myBook);

    // })   
    // editLi.addEventListener('click', function(){
    //     let titElem = elem.querySelector('.title');
    //     editElem(titElem);

    // })   
    // editLi.addEventListener('click', function(){
    //     let authorElem = elem.querySelector('.author');

    //     editElem(authorElem);

    // })   
    // editLi.addEventListener('click', function(){
    //     let categoryElem = elem.querySelector('.category');
    //     editElem(categoryElem);

    // })   
    // editLi.addEventListener('click', function(){
    //     let spanElem = elem.querySelector('span');
    //     editElem(spanElem);

    // })      

}      

const Book = function(title = '', category = '', author = '', rating = ''){
    this.title = title;
    this.category = category;
    this.author = author;
    this.rating = rating;


// this.show = function(){
//     console.log(`${this.title} ${this.author} (${this.category}) ${this.rating}`);
//     }
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
}
//     this.categoryFilter = function(){
//         let resultFilter = this.data.filter(function(item){
//             return item.category == inputFilter.value;
//         })
//         resultFilter.forEach(function(item){
//             item.show();
//         })
        
//     }

    
// }
// // let filterTop = document.querySelector('.btn-filterTop');
// // let filterCategory = document.querySelector('.btn-filterCategory');
// // let inputFiltre = document.querySelector('filter-category');
// filterCategory.addEventListener('click', function(){
//     document.querySelector('.filter_list').style.display = "flex";
// })



// filterTop = function(){
//     filterTop.addEventListener('click', function(){
//         let filterBook = Book.filter((item) => {
//             if (Book.rating >= 4) return item;
//     });
// });

// };     

// filterTop.append(resultTop);
// document.querySelector('.top_list').style.display = "flex";