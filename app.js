const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function resetGrid() {
  const size = prompt(
    "Enter a number between 1 and 100 to set the size of the grid:"
  );
  if (size > 0 && size <= 100) {
    clearGrid();
    createGrid(size);
    addHoverEffect();
    setGridTemplate(size);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}

function setGridTemplate(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function addHoverEffect() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let passes = 0;
    square.addEventListener("mouseover", () => {
      if (passes >= 10) {
        square.style.backgroundColor = "black";
      } else {
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        square.style.backgroundColor = randomColor;
        passes++;
      }
    });
  });
}

resetButton.addEventListener("click", resetGrid);

createGrid(16);
addHoverEffect();
setGridTemplate(16);
