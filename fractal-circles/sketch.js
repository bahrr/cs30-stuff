// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colors = [
  "red",
  "blue",
  "lime",
  "cyan",
  "magenta",
  "yellow",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fractal_circle(width / 2, height, 8);
}

function fractal_circle(x, dia, depth) {
  fill(colors[depth % colors.length]);
  circle(x, height / 2, dia);

  if (depth > 0) {
    fractal_circle(x - dia / 4, dia / 2, depth - 1);
    fractal_circle(x + dia / 4, dia / 2, depth - 1);
  }
}