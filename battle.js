class Battle {

    constructor() {
        this.player = new Player("Player");
        this.enemy = new Player("Enemy");

        this.playBoard = new PlayBoard();
    }

    prepPhase()
    {
        print("Please place all ships on the board.");

        this.board.shipyard.ships.forEach(element => {
            
            this.board.placeShip(element, 4,5);
            

        });
    }


}