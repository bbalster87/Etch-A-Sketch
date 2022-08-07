// This script allows the user to play with an Etch-A-Sketch
const settingsForm = document.querySelector(".settingsForm");
let width = 16 // Default drawing board width
let height = 16 // Default drawing board height
let colorType = "BLACK" // Default drawing style

function createDrawingBoard () {
  // Creates a grid of divs that is N by N to be used as the drawing board
  // Returns the default starting position for the drawing cursor
  if ( width > 100 || height > 100 ) {
    alert("Specified size to large, reverting to defaults");
    width = 16;
    height = 16;
  }
  const container = document.getElementById("board");
  for (let i = 0; i < height; i++) { // Creates the drawing board rows
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < width; j++) { // Creates the drawing board cells
      cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("mouseover", colorSquare);
      row.appendChild(cell);
    }
    container.appendChild(row)
  }
}

function colorSquare () {
  // Colors the cell based on drawing style
  if (colorType === "BLACK") colorSquareBlack(this);
  else if (colorType === "COLOR") colorSquareRandom(this);
}

function colorSquareBlack (cell) {
  // Colors the provided square with progressively more black
  let opacity = window.getComputedStyle(cell).getPropertyValue("opacity");
  cell.style.opacity = parseFloat(opacity) + 0.1;
}

function colorSquareRandom (cell) {
  // Colors the provided square with a random color
  let color = Math.floor(Math.random()*16777215).toString(16)
  cell.style.opacity = 1; // Cells are set to 0 opacity by default
  cell.style.backgroundColor = "#" + color;
}

function resetDrawing () {
  // Removes the drawing board and recreates it to clear the old drawing
  removeDrawingBoard();
  createDrawingBoard();
}

function removeDrawingBoard() {
  // Removes the drawing board
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.remove(); // Removes each cell on the board
  })

  const rows = document.querySelectorAll(".row");
  rows.forEach(row => {
    row.remove() // Removes each row on the board
  })
}

function setSettings () {
  // Pops up a form to allow the user to set height, width, and drawing style
  settingsForm.setAttribute("id", "show");
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    // Sets the number of cells per row on the drawing board
    if (document.getElementById("width").value > 0) {
      width = document.getElementById("width").value;
    }

    // Sets the number of rows on the drawing board
    if (document.getElementById("height").value > 0) {
      height = document.getElementById("height").value;
    }

    // Sets the drawing style
    colorType = document.querySelector('input[name="colorType"]:checked').value;

    // Hides the settings form again
    settingsForm.removeAttribute("id");

     // Reset the drawing board to take on the configured size and style
    resetDrawing();
  })
}

const settingsBtn = document.getElementById("settings");
settingsBtn.addEventListener("click", setSettings); // Opens the settings form

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetDrawing); // Clears the drawing board

createDrawingBoard(); // Creates the drawing board with defaults