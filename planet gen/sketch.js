// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let worldTexture;
let t = 0;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  let seed = random(2000);
  colorMode(RGB, 1.0);
  angleMode(DEGREES);
  worldTexture = createTexture(seed, 1024, 5);
}

function draw() {
  background(0);
  drawSphere();
  t += 1;
}

// draws the actual sphere
function drawSphere() {
  push();
  noStroke();
  texture(worldTexture);
  rotateY(t);
  sphere(100);
  pop();
}

// creates the texture needed for the spehere
function createTexture(seed, res, size) {
  // let normalMap = generateNormals(res); // the normals of the sphere mapped to an array

  // let noiseMap = generateNoise(normalMap, seed, 10); // Creates noise to use
  

  // let texArray = noiseMap; // an array to make editing the texture simpler
  let finalTexture = createImage(res, res); // the final image used
  finalTexture.loadPixels();

  // sets each pixel on the image to the texture array
  for (let y = 0; y < res; y++) {
    for (let x = 0; x < res; x++) {
      let normals = generateNormals(x, y, res);
      let randomNoise = generateNoise(normals, x, y, seed , size);

      let finalColour = [randomNoise[0] / 2 + 0.5, randomNoise[1] / 2 + 0.5, randomNoise[2] / 2 + 0.5];
      finalTexture.set(x, y, color(finalColour[0], finalColour[1], finalColour[2]));
    }
  }
  finalTexture.updatePixels();
  return finalTexture;
}

// creates map of sphere normals
function generateNormals(x, y, res) {
  // converts texture coordinate to angles
  let rx = x * 360 / res;
  let ry = y * 180 / res;

  // converts angles to normals
  let nx = sin(rx);
  let ny = cos(ry);
  let nz = cos(-rx);

  return [nx, ny, nz];
}

// creates map with noise
function generateNoise(input, seed, size) {
  // converts input xyz or rgb into noise
  let ix = noise((input[0] / 2 + 0.5) * size + seed);
  let iy = noise((input[1] / 2 + 0.5) * size + seed);
  let iz = noise((input[2] / 2 + 0.5) * size + seed);
  

  return [ix, iy, iz];
}