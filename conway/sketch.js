// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// eslint-disable-next-line no-undef
let scribble = new Scribble();

let gridSize = 10;
let tileSize = 64;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = setupGrid(gridSize);
}

function draw() {
  background(255);
  drawGrid(grid);
}

function setupGrid(gridSize) {
  let grid = [];
  for (let y = 0; y < gridSize; y++) {
    grid.push([]);
    for (let x = 0; x < gridSize; x++) {
      grid[y].push(Math.round(random()));
    }
  }
  return grid;
}

function drawGrid(grid) {
  for (let y in grid) {
    for (let x in grid[y]) {
      if (grid[y][x] === 1) {
        fill("red");
      }
      else {
        fill("blue");
      }
      scribble.scribbleRect(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2, tileSize, tileSize);
    }
  }
}

function toggleCells(grid, x, y) {
  if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 1;
  }
}

function mouseClicked() {
  let x = Math.floor(mouseX / tileSize);
  let y = Math.floor(mouseY / tileSize);

  if (x <= gridSize && y <= gridSize) {
    toggleCells(grid, x, y);
  }
}

function keyTyped() {
  if (key === "r") {
    grid = setupGrid(gridSize);
  }
  if (key === "e") {
    grid = emptyGrid(gridSize);
  }
  if (key === "w") {
    grid = nextStep(grid);
  }
}

function emptyGrid(gridSize) {
  let grid = [];
  for (let y = 0; y < gridSize; y++) {
    grid.push([]);
    for (let x = 0; x < gridSize; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}

function nextStep(grid) {
  let newGrid = [];
  for (let y in grid) {
    newGrid.push([]);
    for (let x in grid[y]) {
      newGrid[y].push(ConwayResult(grid, x, y));
    }
  }
  return newGrid;
}

function ConwayResult(grid, x, y) {
  let neighbours = 0;
  let numY = Number(y);
  let numX = Number(x);
  for (let i = -1;  i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i !== numY && j !== numX) {
        if (numY + i >= 0 && numY + i < gridSize && numX + j >= 0 && numX + j < gridSize) {
          neighbours += grid[numY + i][numX + j];
        } 
      }
    }
  }
  if (neighbours === 2) {
    console.log("bruh");
    return grid[numY][numX];
  }
  else if (neighbours === 3) {
    return 1;
  }
  else {
    return 0;
  }
}