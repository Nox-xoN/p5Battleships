class Player {

    constructor(name) {
        this.name = name;
        this.points = 0;

        this.playerBoard = new PlayerBoard();
        this.enemyBoard = new EnemyBoard(600, 50);
        this.shipyard = new Shipyard(50, 600, 50, 6);
    }

    scoreUp() {
        this.points++;
    }

    placeShips() {


    }

    shoot() {



        return selectedCell.pos;
    }
}