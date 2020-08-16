
function setup() {
  createCanvas(displayWidth, displayHeight);
  board = new Board(50, 100, 100);
  board.buildBoard();
}

function draw() {
  background(140);
  board.draw();

  fill(51);
  textSize(35);
  text("mPos: " + mouseX + "," + mouseY, 15, 35);
  text("fCount: " + frameCount + ", fRate: " + frameRate(), 15, 75);
}

function mouseWheel(event) {
  return event.delta;
}

