class Battle {

    constructor() {
        this.player = new BotPlayer("Player");
        this.enemy = undefined;
        this.playBoard = new PlayBoard(this.player);
        this.currentPlayer = undefined;
        this.gameFinished = false;

        //this.startSinglePlayer();
    }

    startSinglePlayer() {
        this.enemy = new BotPlayer();
        this.currentPlayer = Math.random() * 2 ? this.player : this.enemy;

        this.prepPhase();
    }

    startMultiPlayer() {
        //this.enemy = new Player("Enemy");
    }

    prepPhase() {
        print("===================================================");
        print("Starting new Singleplayer game.");
        print("Please place your ships onto the board.");
        print("===================================================");

        this.enemy.placeShips();
        this.player.placeShips();

        this.gameLoop();
    }

    gameLoop() {
        this.nextStep();
        setTimeout(this.gameLoop.bind(this), 100);
    }

    nextStep() {
        print("===================================================");
        print("It's " + this.currentPlayer.name + "'s turn...");
        print(this.currentPlayer.name + " has to select a cell on which he wants to shoot");
        print("---------------------------------------------------");

        let posToShoot = this.currentPlayer.shoot();

        let lastPlayer = this.currentPlayer;
        this.switchPlayer();

        this.currentPlayer.playerBoard.shoot(posToShoot);
        print(lastPlayer.name + " is shooting at position " + posToShoot.xy);
        print("===================================================");

        if (this.checkIfPlayerDefeated(this.currentPlayer)) {
            this.endGame(lastPlayer);
        }
    }

    endGame(winningPlayer) {
        print("===================================================");
        print(winningPlayer.name + " won the game!");
        print(winningPlayer.name + " will be awarded with 1 Point...");
        print("===================================================");
        this.gameFinished = true;
        winningPlayer.scoreUp();
    }


    switchPlayer() {
        if (this.currentPlayer === this.player) {
            this.currentPlayer = this.enemy;
        } else {
            this.currentPlayer = this.player;
        }
    }

    checkIfPlayerDefeated(player) {
        let remainingShips = player.playerBoard.ships.filter(ship => {
            return ship.destroyed === false;
        });

        if (remainingShips <= 0)
            return true;
        else
            return false;
    }

}