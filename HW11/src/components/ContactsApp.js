class ContactsApp extends Contacts {
    constructor(User) { //data
        super([arguments]);      
        
        this.data = this.get()

        this.windowEdit = function(id, data = {}){
            const editContact = document.createElement('div');
            const fieldNameElem = document.createElement('input');
            const fieldEmailElem = document.createElement('input');
            const fieldAddressElem = document.createElement('input');
            const fieldPhoneElem = document.createElement('input');
            let btnSaveElem = document.createElement('button');
            let btnCloseElem = document.createElement('button');
        
            editContact.classList.add('contacts__edit');
        
            fieldNameElem.value = data.name;
            fieldEmailElem.value = data.email;
            fieldAddressElem.value = data.address;
            fieldPhoneElem.value = data.phone;
        
            btnSaveElem.innerHTML = 'Save';
            btnCloseElem.innerHTML = 'X';
        
            editContact.append(fieldNameElem, fieldEmailElem, fieldAddressElem, fieldPhoneElem, btnSaveElem, btnCloseElem);
            this.usersElem.append(editContact);
        
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

        this.create = function(){
            this.listElem = document.createElement('ul');
            this.listElem.classList.add('users__list');
        }

        this.update = function(){
            this.data = this.get();

            this.listElem.innerHTML = '';

            this.data.forEach((item) => {
                let liElem = document.createElement('li');
                let nameElem = document.createElement('h3');
                let emailElem = document.createElement('p');
                let addressElem = document.createElement('p');
                let phoneElem = document.createElement('p');

                let divBtnElem = document.createElement('div');
                let btnEdit = document.createElement('button');
                let btnRemove = document.createElement('button');

                liElem.classList.add('contacts__item');
                nameElem.classList.add('contact__name');
                emailElem.classList.add('contact__email');
                addressElem.classList.add('contact__address');
                phoneElem.classList.add('contact__phone');
                divBtnElem.classList.add('contact__edit')

                liElem.id = item.id;
                nameElem.innerHTML = item.get().name;
                emailElem.innerHTML = item.get().email;
                addressElem.innerHTML = item.get().address;
                phoneElem.innerHTML = item.get().phone;

                btnEdit.innerHTML = 'Edit';
                btnRemove.innerHTML = 'X';

                divBtnElem.append(btnEdit, btnRemove);
                liElem.append(nameElem, emailElem, addressElem, phoneElem, divBtnElem);

                this.listElem.append(liElem);

                btnEdit.addEventListener('click', () => {
                    this.onEdit(item.id);
                });

                btnRemove.addEventListener('click', () => {
                    this.onRemove(item.id);
                });
            })
        }

        this.onSave = (id, newUserData) => {
            if (!id) return;

            const user = this.data.find(function(item) {
                return item.id == id;
            });

            if (!user) return;

            user.edit(newUserData);
            this.update();
        };

        this.onEdit = (id) => {
            if (!id) return;

            const user = this.data.find(function(item) {
                return item.id == id;
            });

            if (!user) return;

            this.windowEdit(id, user.get());
        };

        this.onRemove = (id) => {
            if (!id) return;

            this.remove(id);
            this.update();
        };

        this.onAdd = () => {
            const nameElem = this.usersElem.querySelector('[name="users-field-name"]');
            const emailElem = this.usersElem.querySelector('[name="users-field-email"]');
            const addressElem = this.usersElem.querySelector('[name="users-field-address"]');
            const phoneElem = this.usersElem.querySelector('[name="users-field-phone"]');

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

            nameElem.value = '';
            emailElem.value = '';
            addressElem.value = '';
            phoneElem.value = '';
        };

        this.init = function() {
            if (!this.data) return;

            this.usersElem = document.querySelector('.users');

            this.create();

            if (!this.listElem) return;

            this.usersElem.append(this.listElem);

            const btnAdd = this.usersElem.querySelector('[name="users-btn-add"]');
            btnAdd.addEventListener('click', this.onAdd);

            this.update();
        };

        this.init()
    }
    
    
}