let shopList = document.querySelector('#shopping_list'); //поиск списка
let li = document.querySelector('li');

let add = document.querySelector('.btn-add');
    add.addEventListener('click', addNewLi);

let clearALL = document.querySelector('.btn-rem');
let clearList = function(){
    shopList.innerHTML = '';
}
clearALL.addEventListener('click', clearList);

function addNewLi () {
    let newLi = document.createElement('li'); //создание элемента
    newLi.className = 'addLi';
    value = document.querySelector('.write_shopping').value;
    newLi.textContent = value;
    shopList.appendChild(newLi); //добавление элемента

    let input = document.querySelector('.write_shopping'); 
    input.value = ''; //очищение поля после ввода

    let checkBoxElem =document.createElement('input');
    checkBoxElem.className = 'addLi_check';
    // checkBoxElem.innerHTML = '&#10008';
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
    // console.log(newValue);
    if (newValue.length == 0) return;
    elem.innerHTML = newValue;
}


// function activeElem(elem) {
    //     let shopList = document.querySelector('#shopping_list'); //поиск списка
    //     let activeLi = document.querySelector('li');
    //     for (let i = 0; i < shopList.length; i++) {
    //     activeLi = shopList[i];
    //     activeLi.className = '';
    //     }
    //     elem.className = 'active';
    // }
    // checkBoxElem.addEventListener('click', activeElem);
