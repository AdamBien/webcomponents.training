const el = (name) => document.createElement(name);

const div = el("div");
div.innerText = "hey duke!";

const style = el("style");
style.innerText = `
div{
    background: lightgreen;
}
`;

div.appendChild(style);

document.body.appendChild(div);