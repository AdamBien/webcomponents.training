export default class Templates { 
   
    style() { 

        if (!Templates.style) { 
            const styleElement = document.createElement("style");
            const styling = `
            p{
                background: lightgreen;
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
            <p>
            hey from template
            </p>
        `;
        Templates.template = temp;    
        }    
        return Templates.template.content.cloneNode("true");
    }

}