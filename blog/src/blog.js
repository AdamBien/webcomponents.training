class ABlog extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    get number() { 
        return this.getAttribute('number') || 1;
    }

    header() { 
        const template = document.createElement('template');
        template.innerHTML = `
        <slot name="header">B</slot>
        `;
        return template.content.cloneNode(true);
    }

    footer() { 
        const template = document.createElement('template');
        template.innerHTML = `
        <slot name="footer">E</slot>
        `;
        return template.content.cloneNode(true);
    }

    connectedCallback() { 

        customElements.whenDefined('a-post').
            then(_ => this.populatePosts());

    }


    populatePosts() { 
        const post = this.querySelector("a-post");
        this.root.appendChild(this.header());
        for (let i = 0; i < this.number; i++) { 
            const clonedPost = post.cloneNode(true);
            clonedPost.header =  `Title: ${i}`;
            clonedPost.content =  `Content: ${i}`;
            this.root.appendChild(clonedPost);
        }
        this.root.appendChild(this.footer());
    }

}

customElements.define('a-blog',ABlog);