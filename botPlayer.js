class BotPlayer extends Player {

    constructor(difficulty = difficulties.EASY) {
        super("bot - " + difficulty);
        this.difficulty = difficulty;
    }

    placeShips() {
        this.shipyard.ships.forEach(ship => {

            let availableCells = Array.from(this.playerBoard.boardcells.values()).filter(cell => {
                return cell.shipPart === undefined;
            })

            let newCell = undefined;
            let rotate = 0;
            let draggingShip = _.cloneDeep(ship);
            do {
                rotate = Math.floor(Math.random() * 2);
                newCell = availableCells[Math.floor(Math.random() * availableCells.length)];
                if (rotate) {
                    draggingShip.rotate();
                }
            }
            while (!this.shipyard.moveShipTo(draggingShip, newCell));
        });
    }

    shoot() {
        let availableCells = Array.from(this.enemyBoard.boardcells.values()).filter(cell => {
            return cell.shot === false;
        })

        let selectedCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        return selectedCell.pos;
    }

}

const difficulties = {
    EASY: 'easy',
    TRYHARD: 'tryhard'
}