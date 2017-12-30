class ADuke extends HTMLElement { 

    constructor() { 
        super();
        console.log("constructor");
        this.innerText = this.innerText +  " hey from js";
    }

    connectedCallback() { 
        console.log("connected");
    }
    disconnectedCallback() {
        console.log("disconnected");
     }
    
    adoptedCallback(oldDoc, newDoc) { 
        console.log(oldDoc,newDoc);
    }

}
customElements.whenDefined("a-duke").
    then(_ => console.log(customElements.get("a-duke")));

document.querySelector("#register").onclick = _ => {
    console.log("before");
    customElements.define("a-duke", ADuke);
    console.log("after");
}    


document.querySelector("#remove").onclick = _ => { 
    document.body.remove(document.querySelector("a-duke"));

}


