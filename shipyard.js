class Shipyard extends Board {
    constructor(boardXOffset, boardYOffset, cellSize = 50, cellAmount = 10) {
        super(boardXOffset, boardYOffset, cellSize, cellAmount);
        this.ships = [];

        this.build();
        this.loadShips();
    }

    loadShips() {

        this.ships = [
            this.carrier = new Carrier(),
            this.cruiser = new Cruiser(),
            this.destroyer = new Destroyer(),
            this.submarine = new Submarine(),
            this.battleship = new Battleship()
        ];


        for (var i = 0; i < this.ships.length; i++) {
            this.placeShip(this.ships[i], i, 0);
        }

    }

    placeShip(ship, x, y) {
        ship.move((x * this.cellSize) + this.x, (y * this.cellSize) + this.y);
    }
}