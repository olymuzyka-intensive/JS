let shopList = document.querySelector('#shopping_list'); //поиск списка
let li = document.querySelector('li');
// let inputText = document.querySelector('write_shopping');
let add = document.querySelector('.btn-add');
add.addEventListener('click', addNewLi);

function addNewLi () {
    let newLi = document.createElement('li'); //создание элемента
    newLi.className = 'addadLi';
    value = document.querySelector('.write_shopping').value;
    newLi.textContent = value;
    shopList.appendChild(newLi); //добавление элемента

    let input = document.querySelector('.write_shopping'); 
    input.value = ''; //очищение поля после ввода

    let checkBoxElem =document.createElement('checkBox');
    checkBoxElem.innerHTML = '&#10008'
    newLi.before(checkBoxElem);

    let editLi = document.createElement('button');
    editLi.className = 'btn-edit'
    editLi.innerHTML = '&#10000';
    newLi.append(editLi);
}

    let editLi = document.querySelector('checkBox')  


    let clear = document.querySelector('.btn-edit');


    let clearALL = document.querySelector('.btn-rem');

