class Shipyard extends Board {
    constructor(boardXOffset, boardYOffset, cellSize = 50, cellAmount = 10) {
        super(boardXOffset, boardYOffset, cellSize, cellAmount);
        this.ships = [];

        this.build();
        this.loadShips();
    }

    loadShips() {
        this.ships = [
            new Carrier(new Pos(0, 0)),
            new Cruiser(new Pos(1, 0)),
            new Destroyer(new Pos(2, 0)),
            new Submarine(new Pos(3, 0)),
            new Battleship(new Pos(4, 0))
        ];
    }
}