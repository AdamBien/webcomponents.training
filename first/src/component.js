class ADuke extends HTMLElement { 

    constructor() { 
        super();
        this.innerText = this.innerText +  " hey from js";
    }

}

customElements.define("a-duke", ADuke);
console.log('customElements' in window);
console.log(window.customElements);
console.log(customElements instanceof CustomElementRegistry);