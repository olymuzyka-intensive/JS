class Contacts {
    #data = [];
    #lastId = 0;
    #user;

    add = function(userData = {}){
        // const regExpEmail = (/^(\D)(\w[^@]{2,})+@(\w{2,11})\.([a-z]{2,11})$/gim);
        // const regExpPhone = (/^\+?(375)\s?\-?\(?(29|25|44|33|017)\)?\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]$/g); 

        // function checkEmailInput(){
        //     if (checkEmail(emailElemValue)){
        //         emailElem.style.borderColor = 'yellow';
        //     } else {
        //         emailElem.style.borderColor = 'red';
        //     }
        // }

        // function checkPhoneInput(){
        //     if (checkPhone(phonelElemValue)){
        //         phoneElem.style.borderColor = 'yellow';
        //     } else {
        //         phoneElem.style.borderColor = 'red';
        //     }
        // }

        // emailElem.addEventListener('input', checkEmailInput);
        // phoneElem.addEventListener('input', checkPhoneInput);

        // function checkEmail(emailElemValue) {
        //     return regExpEmail.test(emailElemValue);
        // }
        
        // function checkPhone(phoneElemValue){                    
        //     return regExpPhone.test(phoneElemValue);
        // }        


        if (!userData || (userData.name && userData.phone && userData.name.length == 0 && userData.content.phone == 0)) return;

        const user = new User(userData.name, userData.email, userData.address, userData.phone, userData.id);

        if (!user) return;

        this.#lastId++;
        user.id = this.#lastId;

        this.#data.push(user)
        this.updateStorage();
    }

    edit = function(id, userData = {}) {
        if (!id) return;

        let user = this.#data.find(function(item){
            return item.id == id;
        })

        if (!user) return;
        user.edit(userData);
        this.updateStorage();
    }
  
    remove = function(id) {
        if (!id) return;

        let dataTmp = [];

        dataTmp = this.#data.filter(function(item) {
            return item.id != id;
        });

        this.#data = dataTmp;
        this.updateStorage();
    }

    get = function(print = false) {
        let dataTmp = [];

        switch (print) {
            case 1:
                this.#data.forEach(function(item) {
                    dataTmp.push(item.get());
                });
            break;
            default:
                dataTmp = this.#data;
        }

        return dataTmp;
    }

    // updateData = (newData) => {
    //     if (!newData) return;
    //     data = newData;
    //     this.updateStorage();
    // }

    getStorage = () => {
        let storageData = localStorage.getItem('data'); 

        if (!storageData) return false;

        storageData = JSON.parse(storageData);

        storageData.forEach((item) => {
            this.add(item);
        });

        if (data.length > 0) return data;

        return false;
    };

    updateStorage = () => {
        let storageData = this.get(1);
        storageData = JSON.stringify(storageData);

        if (typeof storageData == 'string') localStorage.setItem('data', storageData); 
    };
}