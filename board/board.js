class Board {
    constructor(boardXOffset = 50, boardYOffset = 50, cellSize = 50, cellAmount = 10) {
        this.x = boardXOffset;
        this.y = boardYOffset;
        this.pos = new Pos(boardXOffset, boardYOffset);

        this.cellSize = cellSize;
        this.cellAmount = cellAmount;

        this.boardWidth = this.cellSize * this.cellAmount;
        this.boardHeight = this.cellSize * this.cellAmount;

        this.boardcells = new Map();
        this.ships = [];
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

        this.ships.forEach(ship => {
            ship.draw(this);
        });
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

    addShip(ship, pos) {
        if (this.tryPlaceShip(ship, pos)) {
            this.ships.push(ship);
            return true;
        } else
            return false;
    }

    removeShip(ship) {
        //unset shipparts from boardcells (old position)
        ship.shipParts.forEach(shipPart => {
            this.boardcells.get((shipPart.pos.x) + "," + shipPart.pos.y).shipPart = shipPart;
        });

        this.ships = this.ships.filter(e => e.name !== ship.name);
    }

    tryPlaceShip(ship, pos) {
        for (let shipPart of ship.shipParts) {

            //check if pos of every shippart is located in the board
            print(pos.x + " " + pos.y);
            if (!(
                    pos.x + shipPart.relPos.x <= this.cellAmount &&
                    pos.y + shipPart.relPos.y <= this.cellAmount &&
                    pos.x + shipPart.relPos.x >= 0 &&
                    pos.y + shipPart.relPos.y >= 0
                )) {
                return false;
            }
        }

        ship.pos = pos;

        //set shipparts to boardcells
        ship.shipParts.forEach(shipPart => {
            this.boardcells.get(shipPart.pos.x + "," + shipPart.pos.y).shipPart = shipPart;
        });

        return true;
    }
}