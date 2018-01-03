import Templates from './templates.js';

class ADuke extends HTMLElement { 

    constructor() { 
        super();
        console.log("constructor " + this.innerText);
        this.templates = new Templates();
        this.root = this.attachShadow({ mode: 'open' });
        this.messageView = document.createElement("article");
        this.counter = 0;
        
    }

    connectedCallback() { 
        console.log("connected");
        this.root.appendChild(this.templates.style());
        this.root.appendChild(this.templates.aduke());
        this.root.appendChild(this.messageView);
        this.counterButton = this.root.querySelector("#counter");
        this.counterButton.onclick = _ => this.increaseCounter();
    }

    get message() { 

        return this.getAttribute('message');
    }

    set message(msg) { 
        this.setAttribute('message', msg);
        this.updateMessageView();
    }

    increaseCounter() { 
        this.counter++;
        if (this.counter % 2 == 0) {
            this.setAttribute("even", "true");

        } else { 
            this.setAttribute("even","false");
        }
        this.updateMessageView();
    }

    updateMessageView() { 
        this.messageView.innerHTML = `
           <code>Counter: ${this.counter}</code>
            <div>The message is: "${this.message}"</div>
            <p>Random number: ${Math.random()}</p>
        `;
        
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
    aduke.message = 'have a nice day';

});


