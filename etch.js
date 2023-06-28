let body = document.querySelector("body");
let number = 100;

let button = document.createElement("button");
button.textContent = "Grid size";
button.setAttribute("onclick","gridSize()", false);
body.appendChild(button);

let sizePicker = document.createElement("input");
sizePicker.textContent = "Grid size";
sizePicker.setAttribute("type","range");
sizePicker.setAttribute("min","1");
sizePicker.setAttribute("max","100");
sizePicker.setAttribute("default",number);
sizePicker.classList.add("slider");
body.appendChild(sizePicker);

function setGrid(number) {
    removeExistingGrid();
    //console.log(`number = ${number}`);
    for (let i = 1; i <= number; i++) {
        //console.log(`i=${i}, number=${number}`);
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



let viewport = document.querySelector("html");
let isClicked = false;

viewport.addEventListener("mousedown",holdClick,false);
viewport.addEventListener("mouseup",unholdClick,false);
viewport.addEventListener("mouseover",markCell,false);

function holdClick(e) {
    isClicked = true;
    //console.log(isClicked,e.target);
    markCell(e);
}

function unholdClick() {
    isClicked = false;
    //console.log(isClicked);
}

function markCell(e) {
    //console.log(isClicked,e.target);
    if (isClicked && e.target.classList.contains('item')) {
        e.target.classList.add("marked");
    } else if (!e.target.classList.contains('item')) {
        isClicked=false;
    }
}




//table.addEventListener("mouseover", clickHeld, false);
//table.addEventListener("click", markCell, false);
//table.addEventListener("mousedown",clickHeld);
//table.addEventListener("mouseup",clickReleased);

/*function clickHeld(e) {
    isClicked = true;
    console.log("click held");
    }

function clickReleased() {
    isClicked = false;
    console.log("click released");
}

function markCell(e) {
    table.addEventListener("mousedown",clickHeld);
    table.addEventListener("mouseup",clickReleased);
    //console.log(isClicked);
    if (e.target.classList.contains('item')) {
        e.target.classList.add("marked");
    }
    
}*/