class Shippart {
    constructor(ship, pos) {
        this.destroyed = false;
        this.ship = ship;
        this.pos = pos;
    }

    destroy() {
        this.destroyed = true;
    }

    draw() {
        fill(0, 255, 255);
        rect(this.ship.x + (this.relX * 50), this.ship.y + (this.relY * 50), 50, 50);
    }
}