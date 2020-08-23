let newX;
let newY;
let direction = 0;
let increment = 0;

class Ship {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.x;
        this.y;
        this.rotation = 0;

        this.shipParts = [];
        this.createBody();
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        for (var i = 0; i < this.size; i++) {
            this.shipParts[i].draw();
        }

        push();
        translate(this.x, this.y);
        ellipseMode(CORNER);
        angleMode(DEGREES);
        rotate(this.rotation);
        fill(255, 0, 0);
        ellipse(0, 0, 30, 45 * this.size);
        pop();
    }

    createBody() {
        for (var i = 0; i < this.size; i++) {
            this.shipParts.push(new Shippart(this, 0, i));
        }
    }

    

    rotate() {
        if (this.rotation == 0) {
            this.rotation = -90;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].relX = i;
                this.shipParts[i].relY = 0;
            }
        } else {
            this.rotation = 0;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].relX = 0;
                this.shipParts[i].relY = i;
            }
        }
    }
}