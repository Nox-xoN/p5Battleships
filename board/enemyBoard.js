class EnemyBoard extends Board {

    constructor(boardXOffset = 0, boardYOffset = 0) {
        super(boardXOffset, boardYOffset);
        this.build(this);
    }

    markWater(pos) {
        let cell = this.boardcells.get(pos.xy);
        cell.shot = true;
    }

    markShipPart(pos) {
        let cell = this.boardcells.get(pos.xy);
        cell.shipPart = true;
        cell.shot = true;
    }

}