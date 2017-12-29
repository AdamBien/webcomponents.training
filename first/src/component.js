const duke = document.querySelector("duke");
console.dir(duke);
console.log(duke instanceof HTMLUnknownElement);

const aduke = document.querySelector("a-duke");
console.dir(aduke);
console.log(aduke instanceof HTMLUnknownElement);
console.log(aduke instanceof HTMLElement);