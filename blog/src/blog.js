class ABlog extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    get number() { 
        return this.getAttribute('number') || 1;
    }

    connectedCallback() { 
        const post = this.children[0];
        for (let i = 0; i < this.number; i++) { 
            const clonedPost = post.cloneNode(true);
            clonedPost.setAttribute('title', `Title: ${i}`);
            clonedPost.setAttribute('content', `Content: ${i}`);
            this.root.appendChild(clonedPost);
        }
    }

}

customElements.define('a-blog',ABlog);