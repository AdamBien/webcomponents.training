export default class Templates { 
   
    style() { 

        if (!Templates.style) { 
            const styleElement = document.createElement("style");
            const styling = `
            :host{
                all: initial;
                display:block;
                font-size: 2em;
                border: 2px dashed green;
                margin: 1em;
                padding: 0.5em;
            }
            :host([disabled]){
                opacity: 0.3;
            }
            :host-context(.headline){
                font-size: 3em;
            }
            p{
                background: var(--duke-color,gold);
            }
            ::slotted(p){
                background: lightblue;
            }
            `;
            styleElement.appendChild(document.createTextNode(styling));
            Templates.style = styleElement;
        }
        return Templates.style.cloneNode("true");

    }
    
    aduke() { 
        if (!Templates.template) {
            console.log("inistializing template");
            const temp = document.createElement('template');
            temp.innerHTML = `
            <button id="counter">counter</button>
            <slot name="title"><p>TITLE</p></slot>
            <p>
            hey from template
            </p>
            <slot name="footer"><p>FOOTER</p></slot>
            
        `;
        Templates.template = temp;    
        }    
        return Templates.template.content.cloneNode("true");
    }

}