function setup() {
  createCanvas(displayWidth - 50, displayHeight - 200);

  battle = new Battle();

}

function draw() {
  background(140);
  battle.playBoard.draw();

  fill(51);
  textSize(20);
  text("mPos: " + mouseX + "," + mouseY, 15, 20);
  text("fCount: " + frameCount + ", fRate: " + frameRate(), 15, 40);
}

function mouseClicked(event) {

}

function mousePressed(event) {
  let cell = battle.playBoard.getCellFromCoords(mouseX, mouseY);

  if (cell != null && cell.shipPart != undefined) {
    battle.playBoard.selectedShip = cell.shipPart.ship;
    battle.playBoard.dragging = true;
    print(battle.playBoard.selectedShip);
  }
}

function mouseReleased(event) {
  let cell = battle.playBoard.getCellFromCoords(mouseX, mouseY);

  if (battle.playBoard.selectedShip != undefined) {
    battle.playBoard.placeOnPlayerBoard(new Pos(cell.x, cell.y));
  }
  battle.playBoard.dragging = false;
}

function mouseDragged(event) {
  
}

function mouseWheel(event) {
  if (battle.playBoard.selectedShip != null) {
    battle.playBoard.selectedShip.rotate();
  }
}