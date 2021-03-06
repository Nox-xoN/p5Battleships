class Ship {
    constructor(name, size, pos) {
        this.name = name;
        this.size = size;
        this.pos = pos;
        this.rotation = 0;
        this.bodySize = 50;
        this.destroyed = false;
        this.shipParts = [];
        this.createBodyparts();
    }

    draw(board) {
        for (var i = 0; i < this.size; i++) {
            try {
                this.shipParts[i].draw(board);
            } catch (error) {}
        }

    }

    drawWhileDragging()
    {
        for (var i = 0; i < this.size; i++) {
            try {
                this.shipParts[i].drawWhileDragging();
            } catch (error) {}
        }
    }

    createBodyparts() {
        for (var i = 0; i < this.size; i++) {
            try {
                this.shipParts.push(new ShipPart(this, new Pos(0, i)));
            } catch (error) {
                print("error at createBodyParts");
            }
        }
    }

    rotate() {
        if (this.rotation == 0) {
            this.rotation = -90;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].relPos = new Pos(i, 0);
            }
        } else {
            this.rotation = 0;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].relPos = new Pos(0, i);
            }
        }
    }
}