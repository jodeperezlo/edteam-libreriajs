/* let header = document.createElement('header');
header.id = 'main-header';
header.classList.add('main-header');

let root = document.getElementById('root');
root.appendChild(header); */

/* export function createElement(elem, attr = {}) {
  let element = document.createElement(elem);
  element.id = attr.id;
  element.classList.add(attr.className);

  return element;
}

export function render(elem, DOMelem) {
  DOMelem.appendChild(elem);
}
 */

export function createElement(type, attrList = {}, children = []) {
  let elem = document.createElement(type);

  let keys = Object.keys(attrList);
  keys.map((key) => elem.setAttribute(key, attrList[key]));

  children.map((child) => renderChild(elem, child));

  return elem;
}

function renderChild(elem, child) {
  if (typeof child === 'string') {
    elem.innerHTML += child;
    return;
  }
  elem.appendChild(child);
}

export function render(elemento, DOMelement) {
  DOMelement.appendChild(elemento);
}
