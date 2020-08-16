class Board {
    constructor(cellSize = 50, boardXOffset = 50, boardYOffset = 50) {
        this.cellSize = cellSize;
        this.boardXOffset = boardXOffset;
        this.boardYOffset = boardYOffset;
        this.boardcells = new Map();

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
        for (var ship of this.ships) {
            ship.draw();
        }
    }

    placeShip(ship, x, y) {
        for (var i = 0; i < ship.size; i++) {
            if (this.boardcells.get((ship.body[i].relX + x) + "," + (ship.body[i].relY + y)).occupied) {
                return false;
            }
        }

        this.ships.push(ship);
        for (var i = 0; i < ship.size; i++) {
            this.boardcells.get((ship.body[i].relX + x) + "," + (ship.body[i].relY + y)).occupied = true;
            this.boardcells.get((ship.body[i].relX + x) + "," + (ship.body[i].relY + y)).shippart = ship.body[i];
        }
    }
}