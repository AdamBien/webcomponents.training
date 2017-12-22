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
const root = div.attachShadow({mode:'closed'});
root.appendChild(style);
root.appendChild(content);

document.body.appendChild(div);