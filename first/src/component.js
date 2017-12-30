import Templates from './templates.js';

class ADuke extends HTMLElement { 

    constructor() { 
        super();
        console.log("constructor");
        this.templates = new Templates();
    }

    connectedCallback() { 
        console.log("connected");
        this.appendChild(this.templates.aduke());
        this.appendChild(this.templates.aduke());
        this.appendChild(this.templates.aduke());
    }

    

}
customElements.define("a-duke", ADuke);


