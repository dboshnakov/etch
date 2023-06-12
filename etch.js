let body = document.querySelector("body");
let number = 16;

let container = document.createElement("div");
container.classList.add("container");

for (let i = 1; i < number+1; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add(i);
    container.appendChild(row);
    body.appendChild(container);
    for (let j = 1; j < number+1; j++) {
       let item = document.createElement("div");
       item.classList.add("item");
       item.classList.add(j);
       let thisRow = document.querySelector(`div.row.${CSS.escape(i)}`);
       thisRow.appendChild(item);
    }
}




