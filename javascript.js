
const canvas = document.querySelector(".canvas");


//features buttons
const slider = document.querySelector("#sliderValue");
const resetButton = document.querySelector(".reset-button");
const eraserButton = document.querySelector(".eraser-button");
const colorPicker = document.querySelector(".color-picker");
canvasArea(slider.value);


let currentColor = "#ffffff";
const eraser = false;
const rainbowColor = false;


//slider 
slider.addEventListener("input",(e) => {
    const b = Number(e.target.value);

    //adjusts the size with moving the slider
    canvasArea(b);
    
})

//reset button eventlistener

resetButton.addEventListener("click", () => {
    const gridItemColorAll = document.querySelectorAll(".grid-item");

    gridItemColorAll.forEach((element) => {
        element.style["background-color"] = "#ffffff";
    })

})


// color picker eventlistener

colorPicker.addEventListener("input", (e) => {
    currentColor = e.target.value;
})

// GRID CANVAS gets bigger or smaller when 
// sliding the grid-slider
function canvasArea (size) {
    const canvasContainer = document.querySelector(".canvas");
    for (let index = 0; index < (size*size); index++) {
        
        if(index == 0) { // Remove previous grid size
            while (canvasContainer.hasChildNodes()) {
                canvasContainer.removeChild(canvasContainer.firstChild);
            }
            canvasContainer.style["grid-template-columns"] = "repeat(" + size + ",1fr)";
            canvasContainer.style["grid-template-rows"] = "repeat(" + size + ",1fr)";
        }

        // create current grid size
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        canvasContainer.appendChild(gridItem);

    }

}

canvas.addEventListener("mouseover", (e) => {
    const target = e.target;    
    if (target.matches(".grid-item")) {
        target.style["background-color"] = currentColor;
    }
    
})


