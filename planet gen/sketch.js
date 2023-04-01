// Planet generator
// Ivan Gorylev
// March 31
//
// Extra for Experts:
// - I used a texture as a canvas and mapped it onto a sphere
let worldTexture;
let t = 0;


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
function createTexture(seed, res) {
  let normalMap = generateNormals(res); // the normals of the sphere mapped to an array

  let noiseMap = generateNoise(normalMap, seed, 3); // Creates noise to use
  noiseMap = generateNoise(noiseMap, seed, 5); // Distorts the noise texture further
  

  let texArray = noiseMap; // an array to make editing the texture simpler
  let finalTexture = createImage(res, res); // the final image used
  finalTexture.loadPixels();

  // sets each pixel on the image to the texture array
  for (let y = 0; y < texArray.length; y++) {
    for (let x = 0; x < texArray.length; x++) {
      let index = (y * texArray.length + x) * 4;
      let colorR = texArray[y][x][0];
      let colorG = texArray[y][x][1];
      let colorB = texArray[y][x][2];
      if (colorR < 0.5) {
        colorR = 0;
      }
      else {
        colorR = 0.1 + (colorR * .88);
        colorG = 0.33 + (colorG * 0.51);
        colorB = 0.02 + (colorB * 0.57);
      }

      finalTexture.set(x, y, color(colorR, colorG, colorB));
    }
  }
  finalTexture.updatePixels();
  return finalTexture;
}

// creates map of sphere normals
function generateNormals(size) {
  let normals = [];
  for (let y = 0; y < size; y++) {
    normals.push([]);
    for (let x = 0; x < size; x++) {
      // Converts texture location to angle
      let xAngle = x * 360 / size;
      let yAngle = y * 180 / size;

      // Converts angle to normal
      let nx = sin(xAngle) / 2 + 0.5;
      let ny = cos(yAngle) / 2 + 0.5;
      let nz = cos(-xAngle) / 2 + 0.5;
      let normal = [nx, ny, nz];
      normals[y].push(normal);
    }
  }
  return normals;
}

// creates map with noise
function generateNoise(input, seed, scale) {
  let noiseMap = [];
  for (let y = 0; y < input.length; y++) {
    noiseMap.push([]);
    for (let x = 0; x < input.length; x++) {
      // Adjusts inputs to account for the scale and seed
      let inputRed = input[y][x][0] * scale + seed;
      let inputGreen = input[y][x][1] * scale + seed;
      let inputBlue = input[y][x][2] * scale + seed;
      
      let n = noise(inputRed, inputGreen, inputBlue);
      noiseMap[y].push([n, n, n]);
    }
  }
  return noiseMap;
}