const el = (name) => document.createElement(name);

const div = el("div");
const content = el("div");
content.innerText = "hey duke!";

const style = el("style");
style.innerText = `
div{
    background: lightgreen;
}
`;
div.attachShadow({mode:'open'});
div.shadowRoot.appendChild(style);
div.shadowRoot.appendChild(content);

document.body.appendChild(div);