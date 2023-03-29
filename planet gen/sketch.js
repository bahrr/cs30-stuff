// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let worldTexture;


function setup() {
  createCanvas(1024, 1024, WEBGL);
  let seed = random(2000);
  colorMode(RGB, 1.0);
  console.log("something");
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
  texture(worldTexture);
  sphere(100);
  pop();
}

function createTexture() {
  let normalMap = generateNormals(1024);
  let texArray = normalMap;
  let finalTexture = createImage(1024, 1024);
  finalTexture.loadPixels();
  for (let y = 0; y < texArray.length; y++) {
    for (let x = 0; x < texArray.length; x++) {
      let index = (y * texArray.length + x) * 4;
      let colorR = texArray[y][x][0] / 2 + 0.5;
      let colorG = texArray[y][x][1] / 2 + 0.5;
      let colorB = texArray[y][x][2] / 2 + 0.5;

      finalTexture.set(x, y, color(colorR, colorG, colorB));
    }
  }
  finalTexture.updatePixels();
  return finalTexture;
}

function generateNormals(size) {
  let normals = [];
  for (let y = 0; y < size; y++) {
    normals.push([]);
    for (let x = 0; x < size; x++) {
      let xAngle = x * 360 / size;
      let yAngle = y * 180 / size;

      let nx = cos(xAngle);
      console.log(xAngle);
      let normal = [nx, 0, 0];
      normals[y].push(normal);
    }
  }
  return normals;
}