// 2D Array
// Ivan
// March 20
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// let grid = [[0, 0, 1, 1],
//             [0, 1, 0, 0],
//             [0, 0, 1, 0],
//             [0, 1, 0, 0]];

let grid;

const ROWS = 16;
const COLS = 16;
let cellsize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomGrid(ROWS, COLS);

  if (width < height) {
    cellsize = width / ROWS;
  }
  else {
    cellsize = height / ROWS;
  }
}

function createRandomGrid(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      let i = Math.round(random());
      newGrid[y].push(i);
    }
  }
  return newGrid;
}

function draw() {
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      fill(grid[y][x] * 255);
      square(x * cellsize, y * cellsize, cellsize);
    }
  }
}

function keyTyped() {
  if (key === "r") {
    grid = createRandomGrid(ROWS, COLS);
  }
}

function mousePressed() {
  let x = Math.floor(mouseX / cellsize);
  let y = Math.floor(mouseY / cellsize);

  grid[y][x] = (grid[y][x] + 1) % 2;
}