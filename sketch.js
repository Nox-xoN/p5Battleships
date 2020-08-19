function setup() {
  createCanvas(displayWidth - 50, displayHeight - 200);
  board = new Board(50, 100, 100);
  board.buildBoard();

  board.selectedShip = new Cruiser();

  board.placeShip(board.selectedShip, 3, 3);
}

function draw() {
  background(140);
  board.draw();

  fill(51);
  textSize(35);
  text("mPos: " + mouseX + "," + mouseY, 15, 35);
  text("fCount: " + frameCount + ", fRate: " + frameRate(), 15, 75);
}

function mouseClicked(event) {
  if (board.selectedShip != null) {

    var cell = board.boardcells.get(Math.floor((mouseX - board.boardXOffset) / board.cellSize) + "," + Math.floor((mouseY - board.boardYOffset) / board.cellSize));
    if (cell != null) {
      board.selectedShip.setPos(cell.centerX, cell.centerY);
    }

  }
}

function mouseWheel(event) {
  if (board.selectedShip != null) {
    board.selectedShip.rotate();
  }
}