// Array
const colors = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FFC300",
  "#DAF7A6",
  "#8E44AD",
  "#3498DB",
  "#F1C40F",
  "#1ABC9C",
  "#E74C3C",
];

// Select elements
const grid = document.querySelector(".grid");
const selectedColorDisplay = document.getElementById("selected-color");
const colorCodeSpan = document.getElementById("color-code");

// Function to create color boxes dynamically
function createColorBoxes() {
  colors.forEach((color) => {
    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = color;
    box.innerHTML = `<span>${color}</span>`;
    box.addEventListener("click", () => updateColor(color));
    grid.appendChild(box);
  });
}

// Function to update selected color display
function updateColor(color) {
  selectedColorDisplay.style.backgroundColor = color;
  colorCodeSpan.textContent = color;
  colorCodeSpan.style.color = color;
}

// Initialize the grid
createColorBoxes();
