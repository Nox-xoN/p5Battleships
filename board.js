class Board {
    constructor(cellSize = 50, boardXOffset = 50, boardYOffset = 50) {
        this.cellSize = cellSize;
        this.boardXOffset = boardXOffset;
        this.boardYOffset = boardYOffset;
        this.boardcells = new Map();

        this.selectedShip;
        this.ships = [];
    }

    buildBoard() {
        for (var y = 0; y < 10; y++) {
            for (var x = 0; x < 10; x++) {
                this.boardcells.set(x + "," + y, new Boardcell(this.boardXOffset + (this.cellSize * x), this.boardYOffset + (this.cellSize * y), this.cellSize, this.cellSize));
            }
        }
    }

    draw() {
        for (var element of this.boardcells.values()) {
            element.draw();
        }

        for (var i = 0; i < this.ships.length; i++){
           this.ships[i].draw();
        }
    }

    placeShip(ship, x, y) {
        for (var i = 0; i < ship.size; i++) {
            if (this.boardcells.get((ship.shipParts[i].relX + x) + "," + (ship.shipParts[i].relY + y)).occupied) {
                return false;
            }
        }

        this.ships.push(ship);
        for (var i = 0; i < ship.size; i++) {
            this.boardcells.get((ship.shipParts[i].relX + x) + "," + (ship.shipParts[i].relY + y)).occupied = true;
            this.boardcells.get((ship.shipParts[i].relX + x) + "," + (ship.shipParts[i].relY + y)).shippart = ship.shipParts[i];
        }
    }
}


