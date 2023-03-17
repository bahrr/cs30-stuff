// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  noStroke();
  spawnBubble();
  window.setInterval(spawnBubble, 500);
}
function mousePressed() {
  spawnBubble();
}

function draw() {
  // background(255);

  for (let bubble of bubbles) {
    bubble.x = noise(bubble.time) * width;
    bubble.y = noise(bubble.time + 300) * height;

    fill(bubble.color);
    circle(bubble.x, bubble.y, bubble.size);

    bubble.time += 0.01;
  }
}

function spawnBubble() {
  let bubble = {
    x: random(width),
    y: random(height),
    size: random(5, 50),
    color: color(random(255), random(255), random(255)),
    time: random(999),
  };
  bubbles.push(bubble);
}