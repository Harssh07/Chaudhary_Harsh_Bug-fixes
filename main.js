// Variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");

// Store the dragged piece in a global variable
let draggedPiece;

// Bug 1 Fix: Allowing only one puzzle piece in a drop zone
function handleDrop(e) {
  e.preventDefault();

  // Check if the drop zone already has a child element
  if (this.children.length > 0) {
    return; // Return early to prevent dropping multiple pieces in the same drop zone
  }

  // Append the dragged piece to the drop zone
  this.appendChild(draggedPiece);
}

// Bug 2 Fix: Reparenting pieces back to the drag zone on reset or choosing a new puzzle
function resetBoard() {
  dropZones.forEach((zone) => {
    if (zone.children.length > 0) {
      puzzleBoard.appendChild(zone.firstElementChild);
    }
  });
}

// Function to change the background image and reset the puzzle
function changeBGImage() {
  // Reset the puzzle before changing the background image
  resetBoard();

  // Change the background image
  puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

// Function to handle drag start event
function handleStartDrag() {
  draggedPiece = this;
}

// Function to handle drag over event
function handleDragOver(e) {
  e.preventDefault();
}

// Function to reset the puzzle
function resetPuzzle() {
  // Move puzzle pieces back to the puzzle pieces section
  puzzlePieces.forEach((piece) => {
    // Check if the piece is not already in the puzzle pieces section
    if (!piece.parentNode.classList.contains("puzzle-pieces")) {
      // Append the piece back to the puzzle pieces section
      puzzleBoard.previousElementSibling.appendChild(piece);
    }
  });

  // Clear any puzzle pieces from the drop zones
  dropZones.forEach((zone) => {
    while (zone.firstChild) {
      zone.removeChild(zone.firstChild);
    }
  });
}

// Event listeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach((piece) => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach((zone) => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));

// Call the resetBoard function initially to ensure all pieces are in the drag zone
resetBoard();

// Add event listener to the reset button
resetButton.addEventListener("click", resetPuzzle);
