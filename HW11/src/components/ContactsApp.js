class ContactsApp extends Contacts {

    // let data = this.get();
    
    windowEdit = function(id, data = {}){
        const editContact = document.createElement('div');
        const fieldNameElem = document.createElement('input');
        const fieldEmailElem = document.createElement('input');
        const fieldAddressElem = document.createElement('input');
        const fieldPhoneElem = document.createElement('input');

        editContact.classList.add('contacts__edit');

        fieldNameElem.value = data.name;
        fieldEmailElem.value = data.email;
        fieldAddressElem.value = data.address;
        fieldPhoneElem.value = data.phone;

        btnSaveElem.innerHTML = 'Save';
        btnCloseElem.innerHTML = 'X';

        editContact.append(fieldNameElem, fieldEmailElem, fieldAddressElem, fieldPhoneElem);
        this.userElem.append(editContact);

        btnSaveElem.addEventListener('click', () => {
            const newData = {
                name: fieldNameElem.value,
                email: fieldEmailElem.value,
                address: fieldAddressElem.value,
                phone: fieldPhoneElem.value
            };

            this.onSave(id, newData);
            editContact.remove();
        });

        btnCloseElem.addEventListener('click', function() {
            editContact.remove();
        });
    };
    }

    create = function(){
        this.listElem = document.createElement('ul');
        this.listElem.classList.add('contacts__list');
    }

    update = function(){
        data = this.get();

        this.listElem.innerHTML = '';

        data.forEach((item) => {
            let liElem = document.createElement('li');
            let nameElem = document.createElement('h3');
            let emailElem = document.createElement('p');
            let addressElem = document.createElement('p');
            let phoneElem = document.createElement('p');

            let divBtnElem = document.createElement('div');
            let btnEdit = document.createElement('button');
            let btnRemove = document.createElement('button');

            liElem.classList.add('contacts__item', 'contact');
            nameElem.classList.add('contact__name');
            emailElem.classList.add('contact__email');
            addressElem.classList.add('contact__address');
            phoneElem.classList.add('contact__phone');

            liElem.id = item.id;
            nameElem.innerHTML = item.get().name;
            emailElem.innerHTML = item.get().email;
            addressElem.innerHTML = item.get().address;
            phoneElem.innerHTML = item.get().phone;

            btnEdit.innerHTML = 'Edit';
            btnRemove.innerHTML = 'X';

            divBtnElem.append(btnEdit, btnRemove);
            liElem.append(h3Elem, divElem, divBtnElem);
            this.listElem.append(liElem);

            btnEdit.addEventListener('click', () => {
                this.onEdit(item.id);
            });

            btnRemove.addEventListener('click', () => {
                this.onRemove(item.id);
            });
        })
    }

    onSave = (id, newNoteData) => {
        if (!id) return;

        const user = data.find(function(item) {
            return item.id == id;
        });

        if (!user) return;

        user.edit(newUserData);
        this.update();
    };

    onEdit = (id) => {
        if (!id) return;

        const user = data.find(function(item) {
            return item.id == id;
        });

        if (!user) return;

        this.windowEdit(id, user.get());
    };

    onRemove = (id) => {
        if (!id) return;

        this.remove(id);
        this.update();
    };

   onAdd = () => {
        const nameElem = this.usersElem.querySelector('[name="notes-field-title"]');
        const emailElem = this.usersElem.querySelector('[name="notes-field-content"]');
        const addressElem = this.userElem.querySelector('');
        const phoneElem = this.userElem.querySelector('');

        const nameElemValue = nameElem.value;
        const emailElemValue = emailElem.value;
        const addressElemValue = addressElem.value;
        const phonelElemValue = phoneElem.value;

        const dataFields = {
            name: nameElemValue,
            email: emailElemValue,
            address: addressElemValue,
            phone: phonelElemValue
        };

        this.add(dataFields);
        this.update();

        fieldTitle.value = '';
        fieldContent.value = '';


        // let liElem = document.createElement('li');
        // let nameElem = document.createElement('h3');
        // let emailElem = document.createElement('p');
        // let addressElem = document.createElement('p');
        // let phoneElem = document.createElement('p');
    };

   init = function() {
        if (!data) return;

        this.userElem = document.querySelector('.users');

        this.create();

        if (!this.listElem) return;

        this.usersElem.append(this.listElem);
        
        const btnAdd = this.notesElem.querySelector('[name="users-btn-add"]');
        btnAdd.addEventListener('click', this.onAdd);

        this.update();
    };

    // this.init();
