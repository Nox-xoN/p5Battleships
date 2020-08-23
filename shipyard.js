class Shipyard extends Board {
    constructor(boardXOffset, boardYOffset, cellSize = 50, cellAmount = 10) {
        super(boardXOffset, boardYOffset, cellSize, cellAmount);
        this.ships = [];

        this.build();
        this.loadShips();
    }

    loadShips() {

        this.ships = [
            this.carrier = new Carrier(new Pos(0,0)),
            this.cruiser = new Cruiser(new Pos(1,0)),
            this.destroyer = new Destroyer(new Pos(2,0)),
            this.submarine = new Submarine(new Pos(3,0)),
            this.battleship = new Battleship(new Pos(4,0))
        ];


        // for (var i = 0; i < this.ships.length; i++) {
        //     this.placeShip(this.ships[i], i, 0);
        // }

    }

    placeShip(ship, x, y) {
        ship.move((x * this.cellSize) + this.x, (y * this.cellSize) + this.y);
    }
}