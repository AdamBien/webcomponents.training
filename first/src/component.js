import Templates from './templates.js';

class ADuke extends HTMLElement { 

    constructor() { 
        super();
        console.log("constructor");
        this.templates = new Templates();
        this.root = this.attachShadow({mode:'open'});
    }

    connectedCallback() { 
        console.log("connected");
        this.root.appendChild(this.templates.aduke());
        this.root.appendChild(this.templates.aduke());
        this.root.appendChild(this.templates.aduke());
    }

    

}
customElements.define("a-duke", ADuke);


