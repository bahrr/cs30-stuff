// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let terrain = [];
let xOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles();
}

function spawnRectangles() {
  let time = 0;
  for (let x = 0; x < 2000; x++) {
    let h = noise(time / 3.5) * height;
    let thisRect = {
      x: x,
      height: h,
    };
    terrain.push(thisRect);
    time += 0.01;
  }

}

function draw() {
  background(220);
  fill(0);
  for (let i = xOffset; i < xOffset + width; i++) {
    rect(terrain[i].x - xOffset, height - terrain[i].height, 1, terrain[i].height);
  }
  xOffset++;
}
