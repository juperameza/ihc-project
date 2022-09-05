function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  let display = touches.length + " number touches";
  text(display, 5, 10);
  ellipse(50, 50, 80, 80);
}
