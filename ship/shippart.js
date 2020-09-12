class ShipPart {
    constructor(ship, relPos) {
        this.destroyed = false;
        this.ship = ship;
        this.relPos = relPos;
    }

    destroy() {
        this.destroyed = true;
    }

    draw(board) {


        if (this.destroyed) {
            fill(255, 0, 0);
        } else {
            fill(0, 255, 255);
        }

        rect(board.pos.x + ((this.ship.pos.x + this.relPos.x) * board.cellSize),
            board.pos.y + ((this.ship.pos.y + this.relPos.y) * board.cellSize),
            board.cellSize, board.cellSize);
    }

    drawWhileDragging() {
        fill(0, 255, 255);
        rect(mouseX + (this.relPos.x * this.ship.bodySize), mouseY + (this.relPos.y * this.ship.bodySize), this.ship.bodySize, this.ship.bodySize);
    }

    get pos() {
        return new Pos(this.ship.pos.x + this.relPos.x, this.ship.pos.y + this.relPos.y);
    }
}