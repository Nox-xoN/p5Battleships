class Board {
    constructor(boardXOffset = 50, boardYOffset = 50, cellSize = 50, cellAmount = 10) {
        this.x = boardXOffset;
        this.y = boardYOffset;

        this.cellSize = cellSize;
        this.cellAmount = cellAmount;

        this.boardWidth = this.cellSize * this.cellAmount;
        this.boardHeight = this.cellSize * this.cellAmount;

        this.boardcells = new Map();
        this.ships = [];

        // this.boardcells = new Map([...this.playerBoard.boardcells, ...this.enemyBoard.boardcells, ...this.shipyard.boardcells]);
    }

    build() {
        for (var y = 0; y < this.cellAmount; y++) {
            for (var x = 0; x < this.cellAmount; x++) {

                this.boardcells.set(x + "," + y, new Boardcell(x, y, this.x + (this.cellSize * x), this.y + (this.cellSize * y), this.cellSize, this.cellSize));
            }
        }
    }

    draw() {
        for (var element of this.boardcells.values()) {
            element.draw();
        }

        for (var i = 0; i < this.ships.length; i++) {
            this.ships[i].draw();
        }
    }

    posInBoard(x, y) {
        if (x > this.x && x < this.x + this.boardWidth && y > this.y && y < this.y + this.boardHeight)
            return true;
        else
            return false;
            
    }

    getRelCoords(x, y) {
        var cX = Math.floor((x - this.x) / this.cellSize);
        var cY = Math.floor((y - this.y) / this.cellSize);
        return new Pos(cX, cY);
    }

    addShip(ship, pos)
    {
        this.ships.push(ship);
        
        this.tryPlaceShip(ship);
    }

    removeShip(ship)
    {
        this.ships.pop(ship);
    }

    moveShip(ship)
    {

    }

    tryPlaceShip(ship)
    {
        // ship.shipparts.forEach(shippart => {
        //     shippart.
        // });
    }
}