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
        this.editor.onkeydown = e => this.waitForEnter(e);
        this.appendChild(this.editor);
        this.editor.focus();
    }

    waitForEnter(e) { 
        if (e.key === 'Enter') { 
            this.stopEditing();
        }
    }

    stopEditing() { 
        this.innerText = this.editor.value;
        this.editor.remove();
    }



}

customElements.define('a-content',AContent);