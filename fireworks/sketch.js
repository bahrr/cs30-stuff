// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Spark {
  constructor(x, y, dx, dy, h, s, v, a) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.g = 0;
    this.size = 5;
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }

  display() {
    push();

    noStroke();
    fill(color(this.h, this.s, this.v, this.a));
    circle(this.x, this.y, this.size);

    pop();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy + this.g;
    this.g += 0.1;
    this.a -= 0.01;
  }

  isDead() {
    return this.a <= 0;
  }
}

let sparkArray = [];

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
}

function spawnSpark(x, y) {
  let angle = random(TAU);
  let vel = random(3, 7);
  return new Spark(x, y, cos(angle) * vel, sin(angle) * vel, random(255), 255, 255, 1);
}

function mousePressed() {
  for (let i = 0; i < Math.round(random(100, 1000)); i++) {
    sparkArray.push(spawnSpark(mouseX, mouseY));
  }
}

function draw() {
  background(0, 0, 0, 0.3);

  for (let i = sparkArray.length - 1; i >= 0; i--) {
    sparkArray[i].update();
    sparkArray[i].display();

    if (sparkArray[i].isDead()) {
      sparkArray.splice(i, 1);
    }
  }
}
