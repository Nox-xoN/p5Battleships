class Ship {

    constructor(name, x, y, direction, size) {
        this.name = name;
        this.size = size;
        this.x = x;
        this.y = y;
        this.direction = direction;

        this.shipParts = [];
        this.createBody();
    }

    createBody() {
        for (var i = 0; i < this.size; i++) {
            this.shipParts.push(new Shippart(this, 0, i));
        }
    }

    rotate() {
        if (this.direction == 0) {
            this.direction = 1;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].relX = i;
                this.shipParts[i].relY = 0;
            }
        }
        else {
            this.direction = 0;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].relX = 0;
                this.shipParts[i].relY = i;
            }
        }
    }
}



