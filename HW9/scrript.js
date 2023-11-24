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
    // checkBoxElem.setAttribute('type', 'checkbox')
    // checkBoxElem.before(newLi.value);
    checkBoxElem.innerHTML = '&#10008'
    newLi.before(checkBoxElem);

    let editLi = document.createElement('button');
    editLi.className = 'btn-edit'
    editLi.innerHTML = '&#10000';
    newLi.append(editLi);
}




// document.body.innerHTML = addNewli;



let clear = document.querySelector('.btn-rem');
// console.log(clear)





// function removeLi(event) { //удаление элемента
//     let li = event.target;
//     li.parentNode.remove(li);
// }



// let input = document.querySelector('shopping_input'); 
// console.log(input)




// const AddItem = function(){
//     this.create = function(){
//         item.append(shopList)
//     }
//     return elem;
// }



// btn_clear.addEventListener('click', addItem);

// const clearItem = function (){
//  itemsElem.innerHTML = ''
// }

// let btnClear = document.createElement('button');
// btnClear.addEventListener('click', addItem);
// btnClear.innerHTML = 'clear';
// btnClear.addEventListener('click', clearItem);