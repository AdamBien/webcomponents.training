class ADuke extends HTMLElement { 

    constructor() { 
        super();
        console.log("constructor");
        this.innerText = this.innerText +  " hey from js";
    }

}

const shouldNotExist = customElements.get("a-duke");
console.log(shouldNotExist);

customElements.whenDefined("a-duke").
    then(_ => console.log(customElements.get("a-duke")));

console.log("before");
customElements.define("a-duke", ADuke);
console.log("after");

