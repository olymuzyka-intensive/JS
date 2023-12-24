class Contacts {
    #data = [];
    #lastId = 0;

    add = function(userData = {}){
        if (!userData || (userData.name && userData.phone && userData.name.length == 0 && userData.content.phone == 0 && data.phone.length > 11)) return;

        const user = new Contacts(userData.name, userData.email, userData.address, userData.phone);

        if (!user) return;

        this.#lastId++;
        user.id = this.#lastId;

        this.#data.push(user)
    }

    edit = function(id, userData = {}) {
        if (!id) return;

        let user = this.#data.find(function(item){
            return item.id == id;
        })

        if (!user) return;
        user.edit(userData);
    }

    remove = function(id) {
        if (!id) return;

        let dataTmp = [];

        dataTmp = this.#data.filter(function(item) {
            return item.id != id;
        });

        this.#data = dataTmp;
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
}