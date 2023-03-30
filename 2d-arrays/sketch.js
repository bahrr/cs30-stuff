// 2D Array
// Ivan
// March 20
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 8, 5],
            [0, 0, 1, 0, 2, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 7, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0, 7, 3],
            [0, 0, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 9]];


const ROWS = 9;
const COLS = 9;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (width < height) {
    cellSize = width / ROWS;
  }
  else {
    cellSize = height / ROWS;
  }
}

function draw() {
  displayGrid();
  // drawBoxes();
}

function drawBoxes() {
  push();
  noFill();
  strokeWeight(5);
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; y++) {
      square(x * cellSize, y * cellSize, x * 3 *cellSize);
    }
  }
  pop();
}

function displayGrid() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      fill(255);
      square(x * cellSize, y * cellSize, cellSize);
      fill(0);
      textAlign(CENTER, CENTER);
      text(grid[y][x], x* cellSize + cellSize / 2,
        y * cellSize + cellSize / 2);
    }
  }
}
