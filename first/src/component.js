import Templates from './templates.js';

class ADuke extends HTMLElement { 

    constructor() { 
        super();
        console.log("constructor " + this.innerText);
        this.templates = new Templates();
        this.root = this.attachShadow({ mode: 'open' });
        
    }

    connectedCallback() { 
        console.log("connected");
        this.root.appendChild(this.templates.style());
        this.root.appendChild(this.templates.aduke());
        const titleSlot = this.root.querySelector("slot[name='title']");
        const contents = titleSlot.assignedNodes({ flatten: false });
        if(contents.length > 0)
        console.log("Assigned slot",contents[0],contents[0].assignedSlot);
    }

    get message() { 

        return this.getAttribute('message');
    }

    set message(msg) { 
        this.setAttribute('message',msg);
    }

    attributeChangedCallback(attributeName,oldValue,newValue) { 
        console.log(`attribute listener: ${attributeName} ${oldValue} ${newValue}`);
    }

    static get observedAttributes() { 
        return ['message'];
    }
    

}
customElements.define("a-duke", ADuke);

customElements.whenDefined("a-duke").then(_ => { 
    const aduke = document.querySelector("a-duke");
    console.log('message property',aduke.message);
    aduke.setAttribute("message","good bye");
    console.log('message property', aduke.message);
    aduke.message = 'changed with property';

});


