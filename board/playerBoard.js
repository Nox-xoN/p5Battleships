class PlayerBoard extends Board {

    constructor() {
        super();
        this.build(this);
    }

    shoot(pos) {
        let cell = this.boardcells.get(pos.xy);

        if (cell.shipPart != undefined && !cell.shipPart.destroyed) {
            cell.shipPart.destroy();
            cell.shot = true;
            return true;
        } else {
            cell.shot = true;
            return false;
        }
    }

}