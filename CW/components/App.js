import { header } from "./Header.js";
import { main } from "./Main.js";
import { footer } from "./Footer.js";




class App {
    #create() {
        const elem = document.createElement('div');
        elem.classList.add('app');

        return elem;
    }

    #renderHead() {
        const metaChElem = document.createElement('meta');
        metaChElem.setAttribute('charset', 'UTF-8');

        const metaVwElem = document.createElement('meta');
        metaVwElem.setAttribute('name', 'viewport');
        metaVwElem.setAttribute('content', 'width=device-width, initial-scale=1.0');

        const cssElem = document.createElement('link');
        cssElem.setAttribute('rel', 'stylesheet');
        cssElem.setAttribute('href', '/css/style.css');

        document.head.append(metaChElem, metaVwElem, cssElem);
    }

    #render() {
        if (!this.elem) return;
        if (header) this.elem.append(header);
        if (main) this.elem.append(main);
        if (footer) this.elem.append(footer);

        document.body.prepend(this.elem);
    }

async getData() {
    let data = localStorage.getItem('data');

    if (data && data.length > 0) return true;

    data = await fetch('https://fakestoreapi.com/products')
    .then(response => response.text());

    if (data && data.length > 0) {
        localStorage.setItem('data', data);

        return true;
    }

    return false;
}

    init() {
        if (!await this.getData()) return;

        this.elem = this.#create();
        this.#renderHead();
        this.#render();
    }

}

export default new App().init();