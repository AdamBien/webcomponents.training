class APost extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ mode: "open" });
        this.templateElement = document.createElement("template");
    }

    get title() { 
        return this.getAttribute('title');
    }
    get content() { 
        return this.getAttribute('content');
    }

    connectedCallback() { 
        this.root.appendChild(this.template());
    }

    template() { 
        this.templateElement.innerHTML = `
        <style>
        :host{
            display:block;
            border: 2px solid lightblue;
            padding: 0.5em;
            margin: 1em;
        }
        </style>
        <article>
        <header>
        <h2>${this.title}</h2>
        </header>
        <p>
        ${this.content}
        </p>
        </article>
        `;
        return this.templateElement.content;
    }

}

customElements.define("a-post",APost);