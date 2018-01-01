export default class Templates { 
   
    style() { 

        if (!Templates.style) { 
            const styleElement = document.createElement("style");
            const styling = `
            p{
                background: lightgreen;
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