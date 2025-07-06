const editor = document.getElementById("editor");
let undoStack = [];
let redoStack = [];

// Save input history on typing
editor.addEventListener("input", () => {
  undoStack.push(editor.value);
  redoStack = []; 
});

// Undo function
function undo() {
  if (undoStack.length > 1) {
    redoStack.push(undoStack.pop()); 
    editor.value = undoStack[undoStack.length - 1]; 
  } else if (undoStack.length === 1) {
    redoStack.push(undoStack.pop());
    editor.value = "";
  }
}


function redo() {
  if (redoStack.length > 0) {
    const nextState = redoStack.pop();
    editor.value = nextState;
    undoStack.push(nextState);
  }
}
