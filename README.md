
# Chaudhary_Harsh_Bug-fixes
## Hello and good day! prof, here i'm going to fix ccouple og bugs in my drag and drop project.
### I have made one puzzle game, which has gifferent photos and drop places where we can drop our dragged pieces
#### Plan:

#### 1. Analyze the first bug: Allowing multiple puzzle pieces in a drop zone.
   - The bug occurs when a drop zone contains more than one puzzle piece.
   - To fix this, modify the `handleDrop` function to check if the drop zone already contains a puzzle piece.
   - If the drop zone has a child element (puzzle piece), do nothing and exit the function.
   - Otherwise, proceed with appending the dragged piece to the drop zone.

#### 2. Analyze the second bug: Pieces appearing in drop zones on reset or choosing a new puzzle.
   - The bug occurs when puzzle pieces remain in drop zones after resetting the puzzle or choosing a new puzzle.
   - To fix this, create a new function called `resetBoard`.
   - In the `resetBoard` function, iterate over each puzzle piece.
   - Check if a puzzle piece is currently not in the drag zone (puzzleBoard).
   - If it is not in the drag zone, reparent it by appending it to the drag zone (puzzleBoard).
   - Call the `resetBoard` function when changing the background image and initially to ensure a fresh board.

#### 3. Implement the solutions:
   - Add the check for an existing puzzle piece in the `handleDrop` function before appending the dragged piece.
   - Reparent puzzle pieces back to the drag zone in the `resetBoard` function.
   - Call the `resetBoard` function when changing the background image (inside `changeBGImage`) and initially to ensure a fresh board.

#### 4. Test the game:
   - Test the game by dragging and dropping puzzle pieces into drop zones.
   - Verify that only one puzzle piece can be in a drop zone at a time.
   - Test resetting the puzzle or choosing a new puzzle and ensure that puzzle pieces are reparented back to the drag zone.

#### 5. Submit the solution:
   - Submit the revised code that incorporates the fixes for the bugs and passes the testing phase.
   - Provide a written plan explaining the analysis of the bugs and the steps taken to solve them.
