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
        const title = this.querySelector("[data-title]");
        title.innerText = this.title;
        const content = this.querySelector("[data-content]");
        content.innerText = this.content;
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
            <slot name="title">t</title>
        </header>
            <slot name="content">c</title>
        </article>
        `;
        return this.templateElement.content;
    }

}

customElements.define("a-post",APost);