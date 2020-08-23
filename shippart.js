class Shippart {
    constructor(ship, relX, relY) {
        this.destroyed = false;
        this.ship = ship;
        this.relX = relX;
        this.relY = relY;
    }

    destroy() {
        this.destroyed = true;
    }

    draw() {
        fill(0, 255, 255);
        rect(this.ship.x + (this.relX * 50),this.ship.y + (this.relY * 50), 50, 50);
    }
}