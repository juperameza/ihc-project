let circleX = 500;
let circleY = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  ellipse(circleX, circleY, 50, 50);
}

function touchMoved(event) {
  console.log(event);
  circleX = mouseX;
  circleY = mouseY;
}
