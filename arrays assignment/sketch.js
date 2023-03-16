// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let boxes = [];
let imgs = [];

class mineBox {
  constructor(count) {
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
  angleMode(DEGREES);

  createBoxes();
}
function createBoxes() {
  for (let y = 0; y < 10; y++) {
    let boxColumn = [];
    for (let x = 0; x < 10; x++) {
      boxColumn.push(new mineBox(0));
    }
    boxes.push(boxColumn);
  }
}

function drawBoxes() {
  rotate(-45, createVector(1, 0, 0));
  translate(-225, 0, -350);
  for (let y = 0; y < boxes.length; y++) {
    for (let x = 0; x <boxes[y].length; x++) {
      push();
      translate(x * 50, 0, y * 50);
      texture(imgs[boxes[y][x].count]);
      box(50);
      pop();
    }
  }
}

function draw() {
  drawBoxes();
}
