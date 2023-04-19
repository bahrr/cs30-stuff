// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.size = random(5, 20);

    this.h = random(255);
    this.s = 255;
  }

  display() {
    push();


    colorMode(HSB);
    noStroke();

    fill(this.h, this.s, 255);
    circle(this.x, this.y, this.size);

    pop();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if(this.x + this.size / 2 >= width || this.x - this.size / 2 <= 0) {
      this.dx *= -1;
    }
    if(this.y + this.size / 2 >= height || this.y - this.size / 2 <= 0) {
      this.dy *= -1;
    }
  }

  collisionCheck(otherBall) {
    let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y);
    let radiiSum = this.size / 2 + otherBall.size / 2;
    if(distanceApart <= radiiSum){
      let tempX = this.dx;
      let tempY = this.dy;

      this.dx = otherBall.dx;
      this.dy = otherBall.dy;

      otherBall.dx = tempX;
      otherBall.dy = tempY;

      console.log("collision");
    }
  }
}

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);

  for (let ball of balls) {
    for (let otherBall of balls) {
      if (ball !== otherBall) {
        ball.collisionCheck(otherBall);
      }
    }
    ball.update();
    ball.display();
  }
}

function mousePressed() {
  let ball = new Ball(mouseX, mouseY);
  balls.push(ball);
}