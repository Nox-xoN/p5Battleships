function setup() {
  createCanvas(displayWidth - 50, displayHeight - 200);

  battle = new Battle();
  battle.playBoard.selectedShip = battle.playBoard.shipyard.ships[1];

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

  var cell = battle.playBoard.getCellFromCoords(mouseX, mouseY);
  print(cell);
  if (cell != null && cell.occupied) {
    battle.playBoard.selectedShip = cell.shippart.ship;
  }

  print(battle.playBoard.playerBoard.boardWidth);

}

function mousePressed(event)
{
  
}

function mouseReleased(event)
{
  
}

function mouseDragged(event)
{
  
}

function mouseWheel(event) {
  if (battle.playBoard.selectedShip != null) {
    battle.playBoard.selectedShip.rotate();
  }
}