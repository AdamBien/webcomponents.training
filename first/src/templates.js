export default class Templates { 
    
    
    aduke() { 
        if (!Templates.template) {
            console.log("initializing template");
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