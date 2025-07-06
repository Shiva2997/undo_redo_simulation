const editor = document.getElementById("editor");
let undoStack = [];
let redoStack = [];

// Save input history on typing
editor.addEventListener("input", () => {
  undoStack.push(editor.value);
  redoStack = []; // Clear redo stack when new input is made
});

// Undo function
function undo() {
  if (undoStack.length > 1) {
    redoStack.push(undoStack.pop()); // Move last state to redo
    editor.value = undoStack[undoStack.length - 1]; // Restore previous state
  } else if (undoStack.length === 1) {
    redoStack.push(undoStack.pop());
    editor.value = "";
  }
}

// Redo function
function redo() {
  if (redoStack.length > 0) {
    const nextState = redoStack.pop();
    editor.value = nextState;
    undoStack.push(nextState);
  }
}
