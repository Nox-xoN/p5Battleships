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

function mousePressed(event) {
  let cell = battle.playBoard.getCellFromCoords(new Pos(mouseX, mouseY));
  if (cell != null && cell.shipPart != undefined) {
    battle.playBoard.selectedShip = cell.shipPart.ship;
    battle.playBoard.draggedShip = _.cloneDeep(cell.shipPart.ship);
    battle.playBoard.selectedCell = cell;
    battle.playBoard.dragging = true;
  }
}

function mouseReleased(event) {
  let newCell = battle.playBoard.getCellFromCoords(new Pos(mouseX, mouseY));
  if (battle.playBoard.draggedShip != undefined) {
    let oldCell = battle.playBoard.selectedCell;
    battle.playBoard.placeOnBoard(oldCell.board, newCell.board, new Pos(newCell.x, newCell.y));

    battle.playBoard.selectedCell = undefined;
    battle.playBoard.draggedShip = undefined;
    battle.playBoard.selectedShip = undefined;
  }
  battle.playBoard.dragging = false;
}

function mouseWheel(event) {
  if (battle.playBoard.draggedShip != null) {
    battle.playBoard.draggedShip.rotate();
  }
}