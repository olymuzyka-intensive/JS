let shopList = document.querySelector('#shopping_list'); //поиск списка
let li = document.querySelector('li');

let addLi = document.querySelector('.write_shopping');

let add = document.querySelector('.btn-add');
    add.addEventListener('click', function(){
        if (addLi.value.length > 0) addNewLi();
    });

addLi.addEventListener('keyup', function(e){
    if (e.keyCode === 13 && this.value.length > 0) {
        addNewLi();
    }
})


let clearALL = document.querySelector('.btn-rem');
let clearList = function(){
    shopList.innerHTML = '';
}
clearALL.addEventListener('click', clearList);

function addNewLi () {
    let newLi = document.createElement('li'); //создание элемента
    newLi.className = 'addLi';

    value = document.querySelector('.write_shopping').value;
    // newLi.textContent = value;
    newLi.innerHTML = `<span>${value}</span>`;
    shopList.appendChild(newLi); //добавление элемента

    let input = document.querySelector('.write_shopping'); 
    input.value = ''; //очищение поля после ввода

    let checkBoxElem =document.createElement('input');
    checkBoxElem.className = 'addLi_check';
    checkBoxElem.setAttribute('type', 'checkbox');
        newLi.before(checkBoxElem);

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

    let spanElem = elem.querySelector('span');
    spanElem.innerHTML = newValue;
    
}