// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let seed = random(2000);


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  worldTexture = createTexture(seed);
}

function draw() {
  background(0);
  drawSphere();
}

function drawSphere() {
  push();
  noStroke();
  sphere(100);
  pop();
}

function createTexture() {
  let normalMap = generateNormals(1024);
}

function generateNormals() {
  let normals = [];
  return normals;
}