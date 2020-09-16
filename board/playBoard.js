class PlayBoard {

    constructor(player) {
        this.playerBoard = player.playerBoard;
        this.enemyBoard = player.enemyBoard;
        this.shipyard = player.shipyard;
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

  

    getCellFromCoords(pos) {

        if (this.playerBoard.posInBoard(pos.x, pos.y)) {

            let boardPos = this.playerBoard.getRelCoords(pos.x, pos.y);
            return this.playerBoard.boardcells.get(boardPos.xy);

        } else if (this.enemyBoard.posInBoard(pos.x, pos.y)) {

            let boardPos = this.enemyBoard.getRelCoords(pos.x, pos.y);
            return this.enemyBoard.boardcells.get(boardPos.xy);

        } else if (this.shipyard.posInBoard(pos.x, pos.y)) {

            let boardPos = this.shipyard.getRelCoords(pos.x, pos.y);
            return this.shipyard.boardcells.get(boardPos.xy);

        } else
            return false;
    }
}