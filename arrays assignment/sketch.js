// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let boxes = [];
let imgs = [];

class mineBox {
  constructor(x, y, count) {
    this.x =x;
    this.y = y;
    this.count = count;
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
  createBoxes();
}
function createBoxes() {
  for (let y = 0; y < 10; y++) {
    let boxColumn = [];
    for (let x = 0; x < 10; x++) {
      boxColumn.push()
    }
  }
}

function drawBoxes() {
  rotate(75, createVector(1, 0, 0));
  for (let i = 0; i < boxes.length; i++) {
    texture(imgs[boxes[i].count]);
    box(50);
  }
}

function draw() {
  background(0);
  drawBoxes();
}
