// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridSize = 2;
let tileSize = 64;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = setupGrid(gridSize);
}

function draw() {
  background(0);
  drawGrid(grid);
}

function setupGrid(gridSize) {
  let grid = [];
  for (let y = 0; y < gridSize; y++) {
    grid.push([]);
    for (let x = 0; x < gridSize; x++) {
      grid[y].push(false);
    }
  }
  return grid;
}

function drawGrid(grid) {
  for (let y in grid) {
    for (let x in grid[y]) {
      if (grid[y][x]) {
        fill("red");
      }
      else {
        fill("blue");
      }
      square(x * tileSize, y * tileSize, tileSize);
    }
  }
}

function toggleCells(grid, x, y) {
  grid[y][x] = !grid[y][x];
  if (y > 0) {
    grid[y - 1][x] = !grid[y - 1][x];
  }
  if (y < gridSize -1) {
    grid[y + 1][x] = !grid[y + 1][x];
  }
  if (x > 0) {
    grid[y][x - 1] = !grid[y][x - 1];
  }
  if (x < gridSize -1) {
    grid[y][x + 1] = !grid[y][x + 1];
  }
}

function mouseClicked() {
  let x = Math.floor(mouseX / tileSize);
  let y = Math.floor(mouseY / tileSize);

  toggleCells(grid, x, y);
  if (!grid.flat().includes(false)) {
    gridSize++;
    grid = setupGrid(gridSize);
  }
}