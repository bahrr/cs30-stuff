// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  let seed = random(2000);
  worldTexture = createTexture(seed);
  angleMode(DEGREES);
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
  let finalTexture = createImage(1024, 1024);


  return worldMap; 
}

function generateNormals(size) {
  let normals = [];
  for (let y = 0; y < size; y++) {
    normals.push([]);
    for (let x = 0; x < size; x++) {
      let xAngle = x * 180 / size;
      let yAngle = y * 180 / size;
      let normal = [sin(yAngle) * cos(xAngle), sin(yAngle) * sin(xAngle), cos(yAngle)];
      normals[y].push(normal);
    }
  }
  return normals;
}