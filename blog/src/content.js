class AContent extends HTMLElement { 

    constructor() { 
        super();
        this.editor = document.createElement("input");
    }

    connectedCallback() { 
        this.onclick = _ => this.startEditing();

    }

    startEditing() { 
        this.editor.value = this.innerText;
        this.innerText = ""; 
        this.editor.onkeydown = e => console.log();
        this.appendChild(this.editor);
    }

    stopEditing() { 
        this.innerText = this.editor.value;
        this.removeChild(this.editor);
    }



}

customElements.define('a-content',AContent);