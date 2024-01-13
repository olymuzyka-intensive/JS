class Footer {
    create() {
        const elem = document.createElement('footer');
        elem.classList.add('footer');

        elem.innerHTML='Footer';

        return elem;
    }

    init() {
        return this.create();
    }
}

const footer = new Footer().init();
export { footer };