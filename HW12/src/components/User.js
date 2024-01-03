class User {
    id;
    #name;
    #email;
    #address;
    #phone;

    constructor(name, email, address, phone, id) {
        this.id = id,
        this.#name = name;
        this.#email = email; 
        this.#address = address;
        this.#phone = phone;
    }

    edit = function(data){        
        if (!data || (data.name.length == 0 && data.phone.length == 0)) return;
        // if (!data || (data.name && data.name.length == 0)) return;

        this.#name = data.name;
        this.#email = data.email;
        this.#address = data.address;
        this.#phone = data.phone;
    }

    get = function() {
        return {
            id: this.id,
            name: this.#name,
            email: this.#email,
            address: this.#address,
            phone: this.#phone
        }
    }
}

// const user1 = new User('olga','olymuzyka@gmail.com','gomel','+375291619914')