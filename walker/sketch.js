// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {

  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.speed = 5;
    this.size = 5;
  }

  display() {
    push();
    fill(this.colour);
    noStroke();
    circle(this.x, this.y, this.size);
    pop();
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      // up 
      this.y -= this.speed;
    }
    else if (choice < 50) {
      // down
      this.y += this.speed;
    }
    else if (choice < 75) {
      // right
      this.x += this.speed;
    }
    else {
      // left
      this.x -= this.speed;
    }
  }
}

let walkerArray = [];

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < 20; i++) {
    walkerArray.push(new Walker(random(width), random(height), color(random(255), 255, 255)));
  }
}

function draw() {
  for (let i = 0; i < walkerArray.length; i++) {
    walkerArray[i].move();
    walkerArray[i].display();
  }
}
