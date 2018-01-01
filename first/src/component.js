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

    

}
customElements.define("a-duke", ADuke);


