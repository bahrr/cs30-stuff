// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let worldTexture;
let time = 0;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  let seed = random(2000);
  colorMode(RGB, 1.0);
  angleMode(DEGREES);
  worldTexture = createTexture(seed, 1024);
}

function draw() {
  background(0);
  drawSphere();
  time += 1;
}

// draws the actual sphere
function drawSphere() {
  push();
  noStroke();
  texture(worldTexture);
  rotateY(time);
  sphere(100);
  pop();
}

// creates the texture needed for the spehere
function createTexture(seed, res) {
  let normalMap = generateNormals(res); // the normals of the sphere mapped to an array
  let texArray = normalMap; // an array to make editing the texture simpler

  

  let finalTexture = createImage(res, res); // the final image used
  finalTexture.loadPixels();

  // sets each pixel on the image to the texture array
  for (let y = 0; y < texArray.length; y++) {
    for (let x = 0; x < texArray.length; x++) {
      let index = (y * texArray.length + x) * 4;
      let colorR = texArray[y][x][0];
      let colorG = texArray[y][x][1];
      let colorB = texArray[y][x][2];

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

      let nx = sin(xAngle) / 2 + 0.5;
      let ny = cos(yAngle) / 2 + 0.5;
      let nz = cos(-xAngle) / 2 + 0.5;
      let normal = [nx, ny, nz];
      normals[y].push(normal);
    }
  }
  return normals;
}