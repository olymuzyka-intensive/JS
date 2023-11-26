    function activeElem(elem) {
        let activeLi = document.querySelector('checkBoxElen');
        for (let i = 0; i < shopList.length; i++) {
        activeLi = shopList[i];
        activeLi.className = '';
        }
        elem.className = 'active';
    }
    checkBoxElem.addEventListener('click', activeElem);

    function editElem (elem){
        let newValue = prompt ('изменить?');
        if (newValue.length == 0) return;
        let editElement = document.querySelector('editLi');
        elem.innerHTML = newValue;
        newValue.addEventListener('click', elem);
    }
    editElem.addEventListener('click', editElem);

// let checkBoxes = document.gquerySelectorAll("input[type='checkbox']");
// checkBox.addEventListener('change', function(){
//     if (checkBox.checked){
//         console.log('kuku')
//     }
// });


// document.querySelector('li').onclick = function(){
//     this.remove();
// }




// let shopList = document.querySelector('#shopping_list'); //поиск списка
// let li = document.querySelector('li');
// // let inputText = document.querySelector('write_shopping');
// let add = document.querySelector('.btn-add');
//     add.addEventListener('click', addNewLi);

// let clearALL = document.querySelector('.btn-rem');

// let clearList = function(){
//     shopList.innerHTML = '';
// }
// clearALL.addEventListener('click', clearList);

// function addNewLi () {
//     let newLi = document.createElement('li'); //создание элемента
//     newLi.className = 'addLi';
//     value = document.querySelector('.write_shopping').value;
//     newLi.textContent = value;
//     shopList.appendChild(newLi); //добавление элемента

//     let input = document.querySelector('.write_shopping'); 
//     input.value = ''; //очищение поля после ввода

//     let checkBoxElem =document.createElement('checkBox');
//     // checkBoxElem.className = 'addadLi_check';
//     checkBoxElem.innerHTML = '&#10008';
//     newLi.before(checkBoxElem);

//     let editLi = document.createElement('button');
//     editLi.className = 'btn-edit';
//     editLi.innerHTML = '&#10000';
//     newLi.append(editLi);
// }

// function editLi (elem){
//     let newValue = prompt ('изменить?');
//     if (newValue.length == 0) return;
//     let editElement = document.querySelector('editLi');
//     elem.innerHTML = newValue;
//     newValue.addEventListener('click', editLi)

// }

// function activeElem(elem) {
//     for (let i = 0; i < shopList.length; i++) {
//     let activeLi = shopList[i];
//     activeLi.className = '';
//     }
//     elem.className = 'active';
// }






// //     function checkLi() {
// //         let checkBoxElemEdit = document.querySelector('checkBox');
               
// //         checkBoxElemEdit.addEventListener('click', function(){
// //             checkBoxElemEdit.style.textDecoration = 'line-strough';
// //         });
// //     }


// //     let clear = document.querySelector('.btn-edit');
// //     let clearList = function(){
        

// //         clearALL.addEventListener('click', function(){

// //         });
// //         // shopList.removeChild(value);
        
// //     }
// //     clearALL.addEventListener('click', clearList);
