class AContent extends HTMLElement { 


    connectedCallback() { 
        this.onclick = _ => this.startEditing();
    }

    startEditing() { 
        this.editor = document.createElement("input");
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
        this.fireContentChanged();
    }

    fireContentChanged() { 
        const event = new CustomEvent('contentchanged', {
            detail: {
                content: this.innerText
            }
        });
        this.dispatchEvent(event);
    }



}

customElements.define('a-content',AContent);