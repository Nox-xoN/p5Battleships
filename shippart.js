class Shippart{
    constructor(ship, relX, relY){
        this.destroyed = false;
        this.ship = ship;
        this.relX = relX;
        this.relY = relY;
    }

    destroy()
    {
        this.destroyed = true;
    }
}