

class ADuke extends HTMLElement { 

    constructor() { 
        super();
        console.log("constructor");
    }

    connectedCallback() { 
        console.log("connected");
        this.appendChild(ADuke._template());
        this.appendChild(ADuke._template());
        this.appendChild(ADuke._template());
    }

    static _template() { 
        const template = document.createElement('template');
        template.innerHTML = `
            <p>
            hey from template
            </p>
        `;
        return template.content.cloneNode(true);
    }
    

}
customElements.define("a-duke", ADuke);


