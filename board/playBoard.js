class PlayBoard {

    constructor() {
        this.playerBoard = new PlayerBoard();
        this.enemyBoard = new EnemyBoard(600, 50);
        this.shipyard = new Shipyard(50, 600, 50, 6);
        this.dragging = false;
        this.selectedShip;
    }

    draw() {
        this.playerBoard.draw();
        this.enemyBoard.draw();
        this.shipyard.draw();

        if(this.dragging)
        {
            this.selectedShip.drawWhileDragging();
        }
    }

    placeOnPlayerBoard(pos) {
        if (this.selectedShip != undefined) {
            this.shipyard.removeShip(this.selectedShip, pos)

            let oldPos = this.selectedShip.pos;
            if (!this.playerBoard.addShip(this.selectedShip, pos)) {
                this.shipyard.addShip(this.selectedShip, oldPos);
            }
        }
    }

    getCellFromCoords(x, y) {

        if (this.playerBoard.posInBoard(x, y)) {

            var pos = this.playerBoard.getRelCoords(x, y);
            return this.playerBoard.boardcells.get(pos.x + "," + pos.y);

        } else if (this.enemyBoard.posInBoard(x, y)) {

            var pos = this.enemyBoard.getRelCoords(x, y);
            return this.enemyBoard.boardcells.get(pos.x + "," + pos.y);

        } else if (this.shipyard.posInBoard(x, y)) {

            var pos = this.shipyard.getRelCoords(x, y);
            return this.shipyard.boardcells.get(pos.x + "," + pos.y);

        } else
            return false;
    }
}