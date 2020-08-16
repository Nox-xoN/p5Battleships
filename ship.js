class Ship {

    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.x = 0;
        this.y = 0;
        this.direction = direction;

        this.shipParts = [];
        this.createBody();
    }

    setPos(x, y)
    {
        this.x = x;
        this.y = y;
    }

    createBody() {
        for (var i = 0; i < this.size; i++) {
            this.shipParts.push(new Shippart(this, i, 0));
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



