class PlayBoard {

    constructor() {
        this.playerBoard = new PlayerBoard();
        this.enemyBoard = new EnemyBoard(600, 50);
        this.shipyard = new Shipyard(50, 600, 50, 6);
        this.dragging = false;
        this.selectedShip;
        this.draggedShip;
        this.selectedCell;
    }

    draw() {
        this.playerBoard.draw();
        this.enemyBoard.draw();
        this.shipyard.draw();

        if (this.dragging) {
            this.draggedShip.drawWhileDragging();
        }
    }

    placeOnBoard(fromBoard, toBoard, pos) {
        if (this.selectedShip != undefined) {
            fromBoard.removeShip(this.selectedShip, pos)

            let oldPos = this.selectedShip.pos;
            if (!toBoard.addShip(this.draggedShip, pos)) {
                fromBoard.addShip(this.selectedShip, oldPos);
            }
        }
    }

    shoot(pos) {
        let cell = this.enemyBoard.boardcells.get(pos.x + "," + pos.y);

        if (cell.shipPart && !cell.shipPart.destroyed) {
            cell.shipPart.destroyed = true;
            cell.enemyShot = true;
        } else {
            cell.waterShot = true;
        }
    }

    getCellFromCoords(pos) {

        if (this.playerBoard.posInBoard(pos.x, pos.y)) {

            let boardPos = this.playerBoard.getRelCoords(pos.x, pos.y);
            return this.playerBoard.boardcells.get(boardPos.x + "," + boardPos.y);

        } else if (this.enemyBoard.posInBoard(pos.x, pos.y)) {

            let boardPos = this.enemyBoard.getRelCoords(pos.x, pos.y);
            return this.enemyBoard.boardcells.get(boardPos.x + "," + boardPos.y);

        } else if (this.shipyard.posInBoard(pos.x, pos.y)) {

            let boardPos = this.shipyard.getRelCoords(pos.x, pos.y);
            return this.shipyard.boardcells.get(boardPos.x + "," + boardPos.y);

        } else
            return false;
    }
}