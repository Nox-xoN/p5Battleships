class Ship {

    constructor(name, x, y, direction, size) {
        this.name = name;
        this.size = size;
        this.x = x;
        this.y = y;
        this.direction = direction;

        this.body = [];
        this.createBody();
    }

    createBody() {
        for (var i = 0; i < this.size; i++) {
            this.body.push(new Shippart(this, i, 0));
        }
    }

    rotate() {
        if (this.direction == 0) {
            this.direction = 1;
            for (var i = 0; i < this.size; i++) {
                this.body[i].relX = i;
                this.body[i].relY = 0;
            }
        }
        else {
            this.direction = 0;
            for (var i = 0; i < this.size; i++) {
                this.body[i].relX = 0;
                this.body[i].relY = i;
            }
        }
    }

    draw() {
        fill(23);
        if (this.direction == 0) {
            ellipse(this.x * 50, this.y * 50, 30, 45 * this.size);
        } else {
            ellipse(this.x * 50, this.y * 50, 30, 45 * this.size);
        }
    }
}



