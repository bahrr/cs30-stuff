// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let baseTriangle;

let colorList = [
  "red",
  "orange",
  "yellow",
  "lime",
  "cyan",
  "blue",
  "indigo",
  "purple",
  "magenta",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  baseTriangle = [
    new Point(0, height),
    new Point(width / 2, 0),
    new Point(width, height),
  ];
}

function draw() {
  background(220);
  sierpinski(baseTriangle, round(9 * mouseX / width));
}

function interp(pointA, pointB) {
  let newX = (pointA.x + pointB.x) / 2;
  let newY = (pointA.y + pointB.y) / 2;

  return new Point(newX, newY);
}

function sierpinski(someTriangle, depth) {
  noStroke();
  fill(colorList[depth % colorList.length]);

  triangle(
    someTriangle[0].x,
    someTriangle[0].y,
    someTriangle[1].x,
    someTriangle[1].y,
    someTriangle[2].x,
    someTriangle[2].y,
  );

  if (depth > 0) {
    let leftTriangle = [
      someTriangle[0],
      interp(someTriangle[0], someTriangle[1]),
      interp(someTriangle[0], someTriangle[2]),
    ];
    sierpinski(leftTriangle, depth - 1);

    let topTriangle = [
      interp(someTriangle[0], someTriangle[1]),
      someTriangle[1],
      interp(someTriangle[1], someTriangle[2]),
    ];
    sierpinski(topTriangle, depth - 1);

    let rightTriangle = [
      interp(someTriangle[0], someTriangle[2]),
      interp(someTriangle[1], someTriangle[2]),
      someTriangle[2],
    ];
    sierpinski(rightTriangle, depth - 1);
  }
}
