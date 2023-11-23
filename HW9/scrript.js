function addNewLi () {
    let newLi = document.createElement('li'); //создание элемента
    // newLi.className = 'item';

    let shopList = document.querySelector('#shopping_list'); //поиск списка
    shopList.appendChild(newLi); //добавление элемента
}

let add = document.querySelector('.btn-add');
add.addEventListener('click', addNewLi);







// function removeLi(event) { //удаление элемента
//     let li = event.target;
//     li.parentNode.remove(li);
// }

let clear = document.querySelector('.btn-rem');
console.log(clear)






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