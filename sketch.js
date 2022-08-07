// This script allows the user to play with an Etch-A-Sketch
const settingsForm = document.querySelector(".settingsForm");
let width = 16
let height = 16

function createDrawingBoard (x, y) {
  // Creates a grid of divs that is N by N to be used as the drawing board
  // Returns the default starting position for the drawing cursor
  if ( width > 100 || height > 100 ) {
    alert("Specified size to large, reverting to defaults");
    x = 16;
    y = 16;
    width = 16;
    height = 16;
  }
  const container = document.getElementById("container");
  for (let i = 0; i < x; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < y; j++) {
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
  //let color = Math.floor(Math.random()*16777215).toString(16)
  //this.style.backgroundColor = "#" + color;
  let opacity = window.getComputedStyle(this).getPropertyValue("opacity");
  this.style.opacity = parseFloat(opacity) + 0.1;
}

function moveCursor () {
  // Moves the drawing cursor in a cardinal direction to color a square
  // Returns the new position of the drawing cursor
}

function resetDrawing () {
  // Resets colors on all squares except currently selected
  removeDrawingBoard();
  createDrawingBoard(height, width);
}

function removeDrawingBoard() {
  // Removes the drawing board
  console.log("Removing board")
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
  // Toggle between mouse and keyboard drawing modes
  settingsForm.setAttribute("id", "show");
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    if (document.getElementById("width").value > 0) {
      width = document.getElementById("width").value;
    }
    if (document.getElementById("height").value > 0) {
      height = document.getElementById("height").value;
    }
    settingsForm.removeAttribute("id");
    resetDrawing();
  })
}

const settingsBtn = document.getElementById("settings");
settingsBtn.addEventListener("click", setSettings);

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetDrawing);

resetDrawing();