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
root.innerHTML = '<div>hello</div>';

console.log(root.host);

console.log(div === root.host);

document.body.appendChild(div);