class PlayerBoard extends Board {

    constructor() {
        super();
        this.build();
    }

    // placeShip(ship, x, y) {
    //     for (var i = 0; i < ship.size; i++) {
    //         if (this.playerBoard.boardcells.get((ship.shipParts[i].relX + x) + "," + (ship.shipParts[i].relY + y)).occupied) {
    //             return false;
    //         }
    //     }

    //     this.playerBoard.ships.push(ship);
    //     for (var i = 0; i < ship.size; i++) {
    //         this.playerBoard.boardcells.get((ship.shipParts[i].relX + x) + "," + (ship.shipParts[i].relY + y)).occupied = true;
    //         this.playerBoard.boardcells.get((ship.shipParts[i].relX + x) + "," + (ship.shipParts[i].relY + y)).shippart = ship.shipParts[i];
    //     }
    // }

    placeShip(ship, x, y) {
        
        ship.move((x * this.cellSize) + this.x, (y * this.cellSize) + this.y);
    }
    
}