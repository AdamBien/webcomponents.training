class ADuke extends HTMLElement { 

    constructor() { 
        super();
        this.innerText = this.innerText +  " hey from js";
    }

}

customElements.define("a-duke", ADuke);