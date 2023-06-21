let body = document.querySelector("body");
let number = 16;

let button = document.createElement("button");
button.textContent = "Grid size";
button.setAttribute("onclick", "gridSize()", false);
body.appendChild(button);

function setGrid(number) {
    removeExistingGrid();
    console.log(`number = ${number}`);
    for (let i = 1; i <= number; i++) {
        console.log(`i=${i}, number=${number}`);
        let row = document.createElement("div");
        row.classList.add("row");
        row.classList.add(i);
        container.appendChild(row);
        body.appendChild(container);
        for (let j = 1; j <= number; j++) {
        //console.log(`i=${i}, j=${j}`);
        let item = document.createElement("div");
        item.classList.add("item");
        item.classList.add(`${i}_${j}`);
        let thisRow = document.querySelector(`div.row.${CSS.escape(i)}`);
        thisRow.appendChild(item);
        }
    }
}

let container = document.createElement("div");
container.classList.add("container");
setGrid(number);

function gridSize() {
    const userInput = prompt("Grid size: X by X. Enter X (1 to 100)");
    if (userInput === null || userInput === "") {
    } else if (userInput > 100 || userInput < 1) {
        //console.log(userInput);
        alert("Invalid input. Please enter a number value between 1 and 100");
        gridSize();
    } else {
        console.log(`Grid size ${userInput} by ${userInput}`);
        number = userInput;
        //console.log(number);
        setGrid(number);
    }
}


function removeExistingGrid() {
    if (container.firstChild === null) {
        //console.log("no child elements");
    }
    //console.log(container.firstChild);
    while (container.firstChild !== null) {
        //console.log(container.firstChild);
        container.removeChild(container.firstChild);
    }
}



let table = document.querySelector(".container");
table.addEventListener("click", markCell, false)

function markCell(e) {
    if (e.target.classList.contains('item')) {
        ;
        e.target.classList.toggle("marked");
    }
}