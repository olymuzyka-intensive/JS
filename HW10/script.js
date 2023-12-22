// КОНТАКТЫ И ДАННЫЕ УЧРЕЖДЕНИЯ ОБРАЗОВАНИЯ

function Device(power) {
    this.enable = false;
}

function Tv (telWork, telMobile) {
    // Tv.apply(this);

    this.telWork = telWork || '';
    this.telMobile = telMobile || '';
}

function TvFunc (role) {
    PersonContacts.apply(this, arguments);
        this.role = role || '';  

}

function PersonSpec (spec) {
    Person.bind(PersonSpec)
}


Tv()

