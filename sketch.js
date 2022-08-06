// This script allows the user to play with an Etch-A-Sketch
let width = 20
let height = 40

function createDrawingBoard (x, y) {
  // Creates a grid of divs that is N by N to be used as the drawing board
  // Returns the default starting position for the drawing cursor
  container = document.getElementById("container");
  for (let i = 0; i <= x; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j <= y; j++) {
      cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("mouseover", colorSquare);
      row.appendChild(cell);
    }
    container.appendChild(row)
  }
}

function colorSquare () {
  // Colors the provided square black
  this.style.backgroundColor = "black";
}

function moveCursor () {
  // Moves the drawing cursor in a cardinal direction to color a square
  // Returns the new position of the drawing cursor
}

function resetDrawing () {
  // Resets colors on all squares except currently selected
}

function setSettings () {
  // Toggle between mouse and keyboard drawing modes
  console.log("success")
}

settings = document.querySelector(".settings");
settings.addEventListener("click", setSettings);

createDrawingBoard(height, width);