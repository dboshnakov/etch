let body = document.querySelector("body");
let number = 16;

let sectionMain = document.createElement("div");
let sectionOptions = document.createElement("div");
let sectionGrid = document.createElement("div");
let sectionSlider = document.createElement("div");
let options = document.createElement("div");
let sliderText = document.createElement("div");
let sizeSlider = document.createElement("input");

sectionMain.classList.add("section-main");
sectionOptions.classList.add("section-options");
sectionGrid.classList.add("section-grid");
sectionSlider.classList.add("section-slider");
options.classList.add("options");

sectionSlider.appendChild(sliderText);
sectionSlider.appendChild(sizeSlider);
sectionOptions.appendChild(options);
sectionOptions.appendChild(sectionSlider);
sectionMain.appendChild(sectionOptions);
sectionMain.appendChild(sectionGrid);
body.appendChild(sectionMain);

options.textContent = `lorem ipsum random text lorem ipsum random textlorem ipsum random textlorem ipsum random textlorem ipsum random text`;

sliderText.classList.add("slider-text");
sliderText.textContent = `Grid size: ${number}x${number}`;

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





function setGrid(number) {
    removeExistingGrid();
    //console.log(`number = ${number}`);
    for (let i = 1; i <= number; i++) {
        //console.log(`i=${i}, number=${number}`);
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
        //console.log(userInput);
        alert("Invalid input. Please enter a number value between 1 and 100");
        resizeGrid();
    } else {
        console.log(`Grid size ${userInput} by ${userInput}`);
        number = userInput;
        //console.log(number);
        sliderText.textContent = number;
        setGrid(number);
    }
}


function removeExistingGrid() {
    if (grid.firstChild === null) {
        //console.log("no child elements");
    }
    //console.log(grid.firstChild);
    while (grid.firstChild !== null) {
        //console.log(grid.firstChild);
        grid.removeChild(grid.firstChild);
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