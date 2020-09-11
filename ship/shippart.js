class Shippart {
    constructor(ship, relPos) {
        this.destroyed = false;
        this.ship = ship;
        this.relPos = relPos;
    }

    destroy() {
        this.destroyed = true;
    }

    draw(board) {
        fill(0, 255, 255);
        rect(board.pos.x + ((this.ship.pos.x + this.relPos.x) * board.cellSize),
            board.pos.y + ((this.ship.pos.y + this.relPos.y) * board.cellSize),
            board.cellSize, board.cellSize);
    }

    get pos() {
        return new Pos(this.ship.pos.x + this.relPos.x, this.ship.pos.y + this.relPos.y);
    }
}