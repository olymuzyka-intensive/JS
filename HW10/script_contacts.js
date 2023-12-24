// КОНТАКТЫ И ДАННЫЕ УЧРЕЖДЕНИЯ ОБРАЗОВАНИЯ

function Person(firstName, middleName,lastName) {
    this.firstName = firstName || '';
    this.middleName = middleName || '';
    this.lastName = lastName || '';
    this.getFullName = function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName
    }
}

function PersonContacts (telWork, telMobile) {
    Person.apply(this);

    this.telWork = telWork || '';
    this.telMobile = telMobile || '';
}

function PersonRole (role) {
    PersonContacts.apply(this, arguments);
        this.role = role || '';  

}

function PersonSpec (spec) {
    Person.bind(PersonSpec)
}

let person1 = new Person('Алексей', 'Михайлович', 'Махначев', '+375290000000', 'ученик');
let person2 = new Person('Мария', 'Андреена', 'Захарова', '+375291111111', 'учитель');
let person3 = new Person('Сабина', 'Альбертовна', 'Пулькина', '+375291111111', 'ученик');
let person4 = new Person('Ольга', 'Сергеевна', 'Махначева', '+375293333333', '8029777777', 'родитель');
let person5 = new Person('Марфа', 'Степановна', 'Пулькина', '+375294444444', '8029666666', 'родитель');

console.log(PersonContacts);
console.log(person1);

