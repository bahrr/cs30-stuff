// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let boxes = [];
let imgs = [];
let plane;

// Boxes used as the 3D equivalent to tiles
class MineBox {
  constructor(count, flagged, blank) {
    this.count = count; // How many mines are in this block, zero meaning none
    this.flagged = flagged; // Whether there is a flag on it
    this.blank = blank; // Whether it's blank after being clicked on
  }
}

// Plane used for checking which box the cursor clicks on;
class IntersectPlane {
  constructor(nx, ny, nz, px, py, pz) {
    this.normal = createVector(nx, ny, nz); // The normal of the plane
    this.point = createVector(px, py, pz); // The location of the plane
    this.dot = this.point.dot(this.normal);
  }
  getLambda(Q, v) {
    return (-this.dot - this.normal.dot(Q)) / this.normal.dot(v);
  }
}

function preload() {
  for (let i = 0; i < 5; i++) {
    imgs.push(loadImage(`assets/${i}.png`));
  }
}

function setup() {
  createCanvas(640, 480, WEBGL);

  noStroke(); 
  smooth();
  angleMode(DEGREES);
  plane = new IntersectPlane(0, -.5, 0, 250, -400, 600)

  createBoxes();
  placeMines();
}

// Creates a grid of empty boxes
function createBoxes() {
  for (let y = 0; y < 10; y++) {
    let boxColumn = [];
    for (let x = 0; x < 10; x++) {
      boxColumn.push(new MineBox(0, false));
    }
    boxes.push(boxColumn);
  }
}

// Puts mines in random boxes
function placeMines() {
  for (let i = 0; i < 10; i++) {
    let randomX = Math.floor(random(10));
    let randomY = Math.floor(random(10));
    console.log(randomX);

    boxes[randomY][randomX].count = boxes[randomY][randomX].count + 1;
  }
}

// Draws the boxes
function drawBoxes() {
  push();
  for (let y = 0; y < boxes.length; y++) {
    for (let x = 0; x <boxes[y].length; x++) {
      push();
      translate(x * 50, 0, y * 50);
      texture(imgs[boxes[y][x].count]);
      box(50);
      pop();
    }
  }
  pop();
}
// Draws the cursor
function drawCursor() {
  const x = mouseX - width / 2;
  const y = mouseY - height / 2;

  let q = createVector(0, 0, 0);
  let v = createVector(x, y, 0);
  let lambda = plane.getLambda(q, v);
  let intersect = p5.Vector.add(q, p5.Vector.mult(v, lambda));
  console.log(lambda);

  push();
  translate(intersect);
  sphere(25);
  pop();
}

function draw() {
  background(0);
  let cam = createCamera();
  cam.setPosition(250, -400, 600);
  cam.tilt(45);
  drawBoxes();
  drawCursor();
}
