class Shipyard extends Board {
    constructor(boardXOffset, boardYOffset, cellSize = 50, cellAmount = 10) {
        super(boardXOffset, boardYOffset, cellSize, cellAmount);

        this.build(this);
        this.loadShips();
    }

    loadShips() {
        this.addShip(new Carrier(new Pos(0, 0)), new Pos(0, 0));
        this.addShip(new Cruiser(new Pos(1, 0)), new Pos(1, 0));
        this.addShip(new Destroyer(new Pos(2, 0)), new Pos(2, 0));
        this.addShip(new Submarine(new Pos(3, 0)), new Pos(3, 0));
        this.addShip(new Battleship(new Pos(4, 0)), new Pos(4, 0));
    }
}