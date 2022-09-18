
const canvas = document.querySelector(".canvas");

//features buttons
const slider = document.querySelector("#sliderValue");
const resetButton = document.querySelector(".reset-button");
const eraserButton = document.querySelector(".eraser-button");
const colorPicker = document.querySelector(".color-picker");




let currentColor = "#ffffff";
const eraser = false;
const rainbowColor = false;
const reset = false;

// --- FEATURES ---

//slider 
slider.addEventListener("input",(e) => {
    const b = Number(e.target.value);

    //adjusts the size with moving the slider
    canvasArea(b);
    
})



// color picker eventlistener

colorPicker.addEventListener("input", (e) => {
    currentColor = e.target.value;
    console.log(currentColor);
})




// canvas eventlistener
canvas.addEventListener("click", () => {
    console.log(currentColor);
})
canvas.addEventListener("mousedown", () => {
    // console.log("holding mouse button down");
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
        // gridItem.textContent = index;
        gridItem.classList.add("grid-item");
        canvasContainer.appendChild(gridItem);

    }

}

