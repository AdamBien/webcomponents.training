class APost extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ mode: "open" });
        this._header = "";
        this._content = "";
    }

    get header() { 
        return this._header;
    }
    get content() { 
        return this._content;
    }

    set header(header) { 
        this._header = header;
    }

    set content(content) { 
        this._content = content;
    }

    connectedCallback() { 
        this.root.appendChild(this.template());
        const title = this.querySelector("[data-title]");
        title.innerText = this.header;
        customElements.whenDefined('a-content').
            then(_ => this.populateContent());
    }

    populateContent() { 
        const content = this.querySelector("a-content");
        content.innerText = this.content;
        content.addEventListener('contentchanged',e => console.log(e.detail.content));

    }

    template() { 
        if (!APost.cachedTemplate) {
            const templateElement = document.createElement("template");

            templateElement.innerHTML = `
        <style>
        :host{
            contain: content;
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
            APost.cachedTemplate = templateElement.content;    
        }    
        return APost.cachedTemplate.cloneNode(true);
    }

}

customElements.define("a-post",APost);