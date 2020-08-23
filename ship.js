let newX;
let newY;
let direction = 0;
let increment = 0;

class Ship {
    constructor(name, size, pos) {
        this.name = name;
        this.size = size;
        this.pos = pos;
        this.rotation = 0;

        this.shipParts = [];
        this.createBodyparts();
    }

    move(x, y) {
        this.x = x;
        this.y = y;

        // this.shipParts.forEach(shipPart => {
        //     shipPart
        // });
    }

    draw() {
        for (var i = 0; i < this.size; i++) {
            try {
                this.shipParts[i].draw();
            } catch (error) {
                
            }
            
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

    createBodyparts() {
        for (var i = 0; i < this.size; i++) {
            try {
                this.shipParts.push(new Shippart(this, new Pos(this.pos.x, this.pos.y + i)));
            } catch (error) {
                print("error at createBodyParts");
            }
            
        }
    }

    rotate() {
        if (this.rotation == 0) {
            this.rotation = -90;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].pos.x = this.pos.x + i;
                this.shipParts[i].pos.y = pos.y;
            }
        } else {
            this.rotation = 0;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].pos.x = pos.x;
                this.shipParts[i].pos.y = this.pos.x + i;
            }
        }
    }
}