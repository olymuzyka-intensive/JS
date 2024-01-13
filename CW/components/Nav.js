class Nav {
    create() {
        const elem = document.createElement('nav');
        elem.classList.add('nav');

        elem.innerHTML='Nav';

        return elem;
    }

    init() {
        return this.create();
    }
}

const nav = new Nav().init();
export { nav };