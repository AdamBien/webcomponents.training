const el = (name) => document.createElement(name);

const div = el("div");
const template = document.querySelector("#duke");

const style = el("style");
style.innerText = `
div{
    background: lightgreen;
}
`;
const root = div.attachShadow({mode:'open'});
root.appendChild(style);
root.appendChild(template.content.cloneNode(true));
root.appendChild(template.content.cloneNode(true));
root.appendChild(template.content.cloneNode(true));
//root.appendChild(template.content);
console.dir(template);
document.body.appendChild(div);