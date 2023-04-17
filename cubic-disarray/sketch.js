// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let boxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function drawBox(box) {
  push();
  translate(box.x, box.y);
  rotate(box.r);
  square(0, 0, box.s);
  pop();
}

function spawnBox(theX, theY, theSize, howRotated) {
  let someBox = {
    x: theX,
    y: theY,
    s: theSize,
    r: howRotated
  };
  boxes.push(someBox);
}

function draw() {
  background(220);
  for (let y = 0; y < height; y += 50) {
    for (let x = 0; x < width; x += 50) {
      spawnBox(x, y, 50, random(y / mouseY));
    }
  }
 for (let i = 0; i < boxes.length; i++) {
    drawBox(boxes[i]);
  }
}
