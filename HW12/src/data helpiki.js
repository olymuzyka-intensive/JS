// let storageData = '[{ name: Alex, email: alex@gmail.com, address: Vitebsk, phone: +375291534258 }, { name: Taya, email: taya@gmail.com, address: Gomel, phone: +3752999887711 }, { name: Olga, email: olymuzyka@gmail.com, address: Gomel, phone: +375295544554 }, { name: Olya, email: olymuzyka@yandex.ru, address: Gomel, phone: +375291122334 },]';
// console.log(storageData);

// const info = {
//     name: 'name',
//     email: 'email', 
//     address: 'address',
//     phone: 'phone',
// }
// //document.cookie = 'user=olga; max-age=20';
// function getCookie(name) {
//     let matches = document.cookie.match(new RegExp(
//       "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
//   }          

// console.log(document.cookie);


// window.localStorage.clear();


// this.getStorage = () => {
//     let storageData = localStorage.getItem('data'); 

//     if (!storageData) return false;

//     storageData = JSON.parse(storageData);

//     storageData.forEach((item) => {
//         this.add(item);
//     });

//     if (this.data.length > 0) return this.data; 

//     return false;
// };

// this.updateStorage = () => {
//     let storageData = this.get(1);

//     storageData = JSON.stringify(storageData);

//     if (typeof storageData == 'string') localStorage.setItem('data', storageData);    

//     // document.cookie = 'name=olga; max-age=864000'; //это проверка 10 day

//     function setCookie(name, value, days) {
//         var cookie = name + "=" + encodeURIComponent(value);
        
//         if(typeof days === "number") {
//             cookie += "; max-age=" + (days*24*60*60*10);
            
//             document.cookie = cookie;
//         }
//     }

    // function getCookie(name) {
    //     let matches = document.cookie.match(new RegExp(
    //       "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    //     ));
    //     return matches ? decodeURIComponent(matches[1]) : undefined;
    //   }          
    //   const cookie = getCookie()

// };




// function setData(key, value) {
//     let currentTime = new Date().getTime()
//     let pastTime = 10 * 24 * 60 * 60 * 1000
//     localStorage.setItem(key, JSON.stringify({data: value, time: currentTime + pastTime}))
//   }

//   function getData(key) {
//     let dataObj = JSON.parse(localStorage.getItem(key))
//     if (new Date().getTime() > dataObj.time) {
//       console.log('already expired');
//       return null;
//     } else {
//      return dataObj.data
//     }
//   }




            // // set cookie
            // document.cookie = "deleteData=true; expires=" + new Date(Date.now() + 60 * 1000).toUTCString();

            // // check cookie
            // if (document.cookie.indexOf("deleteData=true") > -1) {
            // localStorage.removeItem("myData");
            // document.cookie = "deleteData=; expires=" + new Date(0).toUTCString();
            // }
            

            // const regExpEmail = (/^(\D)(\w[^@]{2,})+@(\w{2,11})\.([a-z]{2,11})$/gim);
            // const regExpPhone = (/^\+?(375)\s?\-?\(?(29|25|44|33|017)\)?\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]$/g); 


            // function checkEmailInput(){
            //     if (checkEmail(emailElemValue)){
            //         emailElem.style.borderColor = 'none';
            //     } else {
            //         emailElem.style.borderColor = 'red';
            //     }
            // }

            // function checkPhoneInput(){
            //     if (checkPhone(phonelElemValue)){
            //         phoneElem.style.borderColor = 'none';
            //     } else {
            //         phoneElem.style.borderColor = 'red';
            //     }
            // }
            
            // function checkEmail(emailElemValue) {
            //     return regExpEmail.test(emailElemValue);
            // }
            
            // function checkPhone(phoneElemValue){                    
            //     return regExpPhone.test(phoneElemValue);
            // }        

            // emailElem.addEventListener('input', checkEmailInput);
            // phoneElem.addEventListener('input', checkPhoneInput);



            // this.setCookie = (cname, cvalue, exdays) => {
            //     const d = new Date();
            //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            //     let expires = "expires="+d.toUTCString();
            //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            // }
              
            // this.getCookie = (cname) => {
            //     let name = cname + "=";
            //     let ca = document.cookie.split(';');
            //     for(let i = 0; i < ca.length; i++) {
            //       let c = ca[i];
            //       while (c.charAt(0) == ' ') {
            //         c = c.substring(1);
            //       }
            //       if (c.indexOf(name) == 0) {
            //         return c.substring(name.length, c.length);
            //       }
            //     }
            //     return "";
            // }
              
            // this.checkCookie = () => {
            //     let user = getCookie("username");
            //     if (user != "") {
            //       alert("Welcome again " + user);
            //     } else {
            //       user = prompt("Please enter your name:", "");
            //       if (user != "" && user != null) {
            //         setCookie("username", user, 365);
            //       }
            //     }
            // }




                    //     function getCookie(name) {
        //         let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        //             return matches ? decodeURIComponent(matches[1]) : undefined;
        //         }    
        //     function setCookie(name, value, days) {
        //         var cookie = name + "=" + encodeURIComponent(value);
                                
        //         if(typeof days === "number") {
        //             cookie += "; max-age=" + (days*24*60*60*10);
                                    
        //             document.cookie = cookie;
        //         }
        //     }
                    
        //     function setData(key, value) {
        //         let currentTime = new Date().getTime();
        //         let pastTime = 10 * 24 * 60 * 60 * 1000;
        //         localStorage.setItem(key, JSON.stringify({data: value, time: currentTime + pastTime}));
        //     }
        
        //     function getData(key) {
        //         let dataObj = JSON.parse(localStorage.getItem(key));
        //         if (new Date().getTime() > dataObj.time) {
        //             return null;
        //             } else {
        //             return dataObj.data;
        //             }
        //     }





        // class Cookies {
        //     set(name, value, options = {}) {
        //         options = {
        //             path: '/', 
        //             ...options
        //         };
        
        //         if (options.expires === undefined) {
        //             options.expires = new Date();
        //             options.expires.setDate(options.expires.getDate() + 10); 
        //         }
        //         if (options.expires.toUTCString) {
        //             options.expires = options.expires.toUTCString();
        //         }
        
        //         let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        
        //         for (const key in options) {
        //             updatedCookie += "; " + key;
        //             const optionValue = options[key];
        //             if (optionValue !== true) {
        //                 updatedCookie += "=" + optionValue;
        //             }
        //         }
        
        //         document.cookie = updatedCookie;
        //     };
        
        //     get(name) {
        //         const matches = document.cookie.match(new RegExp(
        //             "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
        //         ));
        //         return matches ? decodeURIComponent(matches[1]) : undefined;
        //     };
        
        //     delete(name) {
        //         this.set(name, "", {
        //             'max-age': -1,
        //             'expires': new Date()
        //         })
        //     };
        // }