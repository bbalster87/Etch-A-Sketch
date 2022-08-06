// This script allows the user to play with an Etch-A-Sketch

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
      row.appendChild(cell);
    }
    container.appendChild(row)
  }
}

function colorSquare () {
  // Colors the provided square black
}

function moveCursor () {
  // Moves the drawing cursor in a cardinal direction to color a square
  // Returns the new position of the drawing cursor
}

function resetDrawing () {
  // Resets colors on all squares except currently selected
}

function setDrawingMode () {
  // Toggle between mouse and keyboard drawing modes
}

createDrawingBoard(20, 20);