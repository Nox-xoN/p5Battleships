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

    build(board) {
        print(board);
        for (var y = 0; y < this.cellAmount; y++) {
            for (var x = 0; x < this.cellAmount; x++) {

                this.boardcells.set(
                    x + "," + y,
                    new Boardcell(x, y, this.x + (this.cellSize * x), this.y + (this.cellSize * y), this.cellSize, this.cellSize, 255, board)
                );
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

    addShip(ship, cell) {
        if (this.tryPlaceShip(ship, cell)) {
            this.ships.push(ship);
            return true;
        } else
            return false;
    }

    removeShip(ship) {
        //unset shipparts from boardcells (old position)
        ship.shipParts.forEach(shipPart => {
            this.boardcells.get(shipPart.pos.xy).shipPart = undefined;
        });
        this.ships = this.ships.filter(e => e.name !== ship.name);
    }

    tryPlaceShip(ship, cell) {
        let pos = cell.pos;

        for (let shipPart of ship.shipParts) {
            //check if pos of every shippart is located in the board
            if (!(
                    pos.x + shipPart.relPos.x < this.cellAmount &&
                    pos.y + shipPart.relPos.y < this.cellAmount &&
                    pos.x + shipPart.relPos.x >= 0 &&
                    pos.y + shipPart.relPos.y >= 0
                )) {
                return false;
            }

            //check if ship is not colliding with a already placed ship
            if (this.boardcells.get(new Pos(pos.x + shipPart.relPos.x, pos.y + shipPart.relPos.y).xy).shipPart != undefined) {
                return false;
            }
        }
        ship.pos = pos;

        //set shipparts to boardcells
        ship.shipParts.forEach(shipPart => {
            this.boardcells.get(shipPart.pos.xy).shipPart = shipPart;
        });

        return true;
    }

    moveShipTo(ship, newCell) {
        if (newCell.board instanceof EnemyBoard)
            return false;

        if (ship != undefined) {
            let oldCell = this.boardcells.get(ship.pos.xy);
            let oldShip = oldCell.shipPart.ship;

            this.removeShip(oldShip);
            if (!newCell.board.addShip(ship, newCell)) {
                this.addShip(oldShip, oldCell);
                return false;
            }
            return true;
        }
        return false;
    }
}