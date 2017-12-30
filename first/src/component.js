

class ADuke extends HTMLElement { 

    constructor() { 
        super();
        console.log("constructor");
    }

    connectedCallback() { 
        console.log("connected");
        this.appendChild(this._template());
        this.appendChild(this._template());
        this.appendChild(this._template());
    }

     _template() { 
        if (!ADuke.template) {
            console.log("initializing template");
            const temp = document.createElement('template');
            temp.innerHTML = `
            <p>
            hey from template
            </p>
        `;
            ADuke.template = temp;    
        }    
        return ADuke.template.content.cloneNode("true");
    }
    

}
customElements.define("a-duke", ADuke);


