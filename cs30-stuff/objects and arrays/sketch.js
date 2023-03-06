// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// List of balls
let balls = [];

// Spawns ball
function spawnBall (tempX, tempY) {
  let newBall = {
    x: tempX,
    y: tempY,
    dx: random(-5, 5),
    dy: random(-5, 5),
    size: random(25, 50),
    color: color(random(255), random(255), random(255))
  };
  balls.push(newBall);
}

function mousePressed() {
  spawnBall(mouseX, mouseY);
}

function setup() {
  ellipseMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  spawnBall(width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function moveBalls() {
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].x + balls[i].size >= width || balls[i].x - balls[i].size <= 0) {
      balls[i].dx *= -1;
    }
    if (balls[i].y + balls[i].size >= height || balls[i].y - balls[i].size <= 0) {
      balls[i].dy *= -1;
    }
    
    for (let j = 0; j < balls.length; j++) {
      if (balls[i] !== balls[j]) {
        if (dist(balls[i].x, balls[i].y, balls[j].x, balls[j].y) <= balls[i].size) {
          balls[i].dx *= -1;
          balls[i].dy *= -1;
        }
      }
    }
    balls[i].x += balls[i].dx;
    balls[i].y += balls[i].dy;
  }
}

function drawBalls() {
  for (let i = 0; i < balls.length; i++) {
    fill(balls[i].color);
    ellipse(balls[i].x, balls[i].y, balls[i].size * 2);
  }
}
function draw() {
  background(220);
  moveBalls();
  drawBalls();
}
