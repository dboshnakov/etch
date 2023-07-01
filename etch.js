let body = document.querySelector("body");
let number = 16;
let gridMode = false;

let sectionMain = document.createElement("div");
let sectionOptions = document.createElement("div");
let sectionGrid = document.createElement("div");
let sectionSlider = document.createElement("div");
let options = document.createElement("div");
let sliderText = document.createElement("div");
let sizeSlider = document.createElement("input");
let erase = document.createElement("div");
let showGrid = document.createElement("div");
let flagEraser = document.createElement("input");
let flagShowGrid = document.createElement("input");

sectionMain.classList.add("section-main");
sectionOptions.classList.add("section-options");
sectionGrid.classList.add("section-grid");
sectionSlider.classList.add("section-slider");
options.classList.add("options");
erase.classList.add("option");
erase.classList.add("erase");
showGrid.classList.add("option");
showGrid.classList.add("show-grid");
flagEraser.classList.add("checkbox");
flagShowGrid.classList.add("checkbox");
labelEraser = document.createElement("label");
labelShowGrid = document.createElement("label");

erase.appendChild(flagEraser);
erase.appendChild(labelEraser);
showGrid.appendChild(flagShowGrid);
showGrid.appendChild(labelShowGrid);
options.appendChild(erase);
options.appendChild(showGrid);
sectionSlider.appendChild(sliderText);
sectionSlider.appendChild(sizeSlider);
sectionOptions.appendChild(sectionSlider);
sectionOptions.appendChild(options);
sectionMain.appendChild(sectionOptions);
sectionMain.appendChild(sectionGrid);
body.appendChild(sectionMain);

flagEraser.setAttribute("id","eraser");
labelEraser.setAttribute("for","eraser");
labelEraser.textContent ="Eraser";
flagShowGrid.setAttribute("id","display-grid");
labelShowGrid.setAttribute("for","display-grid");
labelShowGrid.textContent ="Show grid";

sliderText.classList.add("slider-text");
sliderText.textContent = `Grid size: ${number}x${number}`;

flagEraser.setAttribute("type","checkbox");
flagEraser.setAttribute("name","eraser");

flagShowGrid.setAttribute("type","checkbox");
flagShowGrid.setAttribute("name","color-picker");

sizeSlider.textContent = "Grid size";
sizeSlider.setAttribute("type","range");
sizeSlider.setAttribute("min","1");
sizeSlider.setAttribute("max","100");
sizeSlider.setAttribute("value",number);
sizeSlider.setAttribute("default",number);
sizeSlider.classList.add("slider");

sizeSlider.addEventListener("mouseup",function() {
    number = this.value;
    sliderText.textContent = `Grid size: ${number}x${number}`;
    setGrid(number);
});

sizeSlider.oninput = function() {
    number = this.value;
    sliderText.textContent = `Grid size: ${number}x${number}`;
}

flagShowGrid.addEventListener("change",function() {
    if (this.checked) {
        gridMode = true;
    } else {
        gridMode = false;
    }
    console.log(gridMode);
    displayGrid();
});

function displayGrid() {
    console.log(cells);
    if (gridMode) {
        cells.forEach(cell => cell.classList.add("with-border"));
    } else {
        cells.forEach(cell => cell.classList.remove("with-border"));
    }
}


function setGrid(number) {
    removeExistingGrid();
    for (let i = 1; i <= number; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.classList.add(i);
        grid.appendChild(row);
        sectionGrid.appendChild(grid);
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


let grid = document.createElement("div");
grid.classList.add("grid");
setGrid(number);

function resizeGrid() {
    const userInput = prompt("Grid size: X by X. Enter X (1 to 100)");
    if (userInput === null || userInput === "") {
    } else if (userInput > 100 || userInput < 1) {
        alert("Invalid input. Please enter a number value between 1 and 100");
        resizeGrid();
    } else {
        console.log(`Grid size ${userInput} by ${userInput}`);
        number = userInput;
        sliderText.textContent = number;
        setGrid(number);
    }
}

function removeExistingGrid() {
    if (grid.firstChild === null) {
    }
    while (grid.firstChild !== null) {
        grid.removeChild(grid.firstChild);
    }
}

let viewport = document.querySelector("html");
let isClicked = false;
let eraserMode = false;


let cells = document.querySelectorAll(".item");





viewport.addEventListener("mousedown",holdClick,false);
viewport.addEventListener("mouseup",unholdClick,false);
viewport.addEventListener("mouseover",markCell,false);
flagEraser.addEventListener("change",function() {
    if (this.checked) {
        eraserMode = true;
    } else {
        eraserMode = false;
    }
});

function holdClick(e) {
    isClicked = true;
    markCell(e);
}

function unholdClick() {
    isClicked = false;
}

function markCell(e) {
    if (isClicked && e.target.classList.contains('item')) {
        if (!eraserMode) {
            e.target.classList.add("marked");
        } else {
            e.target.classList.remove("marked");
        }
    } else if (!e.target.classList.contains('item')) {
        isClicked=false;
    }
}