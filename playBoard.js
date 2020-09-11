class PlayBoard {

    constructor() {
        this.playerBoard = new PlayerBoard();
        this.enemyBoard = new EnemyBoard(600, 50);
        this.shipyard = new Shipyard(50, 600, 50, 6);

        this.selectedShip;
    }

    draw() {
        this.playerBoard.draw();
        this.enemyBoard.draw();
        this.shipyard.draw();
    }

    placeOnPlayerBoard(pos) {
        if (this.selectedShip != undefined) {
            if (this.addShip(this.selectedShip, pos)) {
                this.shipyard.removeShip(this.selectedShip);
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