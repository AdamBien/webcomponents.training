const template = document.createElement('template');
template.innerHTML = `
    <p>
    hey from template
    </p>
`;

class ADuke extends HTMLElement { 

    constructor() { 
        super();
        console.log("constructor");
    }

    connectedCallback() { 
        console.log("connected");
        this.appendChild(template.content.cloneNode(true));
        this.appendChild(template.content.cloneNode(true));
        this.appendChild(template.content.cloneNode(true));
    }
    

}
customElements.define("a-duke", ADuke);


