// Variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");

// Store the dragged piece in a global variable
let draggedPiece;

function changeBGImage() {
  puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
  resetBoard(); // Call the resetBoard function when changing the background image
}

function handleStartDrag() {
  draggedPiece = this;
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();

  // Bug 1 Fix: Allowing only one puzzle piece in a drop zone
  if (this.children.length > 0) {
    return;
  }

  // Bug 2 Fix: Reparent existing puzzle piece back to the drag zone
  if (this.firstChild) {
    puzzleBoard.appendChild(this.firstChild);
  }

  this.appendChild(draggedPiece);
}
function resetPuzzle() {
    // Move puzzle pieces back to the puzzle pieces section
    puzzlePieces.forEach(piece => {
      // Check if the piece is not already in the puzzle pieces section
      if (!piece.parentNode.classList.contains("puzzle-pieces")) {
        // Append the piece back to the puzzle pieces section
        puzzleBoard.previousElementSibling.appendChild(piece);
      }
    });
  
    // Clear any puzzle pieces from the drop zones
    dropZones.forEach(zone => {
      while (zone.firstChild) {
        zone.removeChild(zone.firstChild);
      }
    });
  }
 
resetButton.addEventListener("click", resetPuzzle);
// Function to reparent puzzle pieces back to the drag zone
function resetBoard() {
  puzzlePieces.forEach((piece) => {
    if (piece.parentNode !== puzzleBoard) {
      puzzleBoard.appendChild(piece);
    }
  });
}

// Event Listeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach((piece) => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach((zone) => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));

// Call the resetBoard function initially to ensure a fresh board
resetBoard();
