class Boardcell {
    constructor(x, y, xReal, yReal, w, h, brightness, board) {
        this.pos = new Pos(x, y);
        this.posReal = new Pos(xReal, yReal);
        this.w = w;
        this.h = h;
        this.brightness = brightness;
        this.shipPart = undefined;
        this.shot = false;
        this.posCenter = new Pos(xReal + (this.w / 2), yReal + (this.h / 2));
        this.board = board;
    }

    mHovers() {
        if (mouseX > this.posReal.x && mouseX < this.posReal.x + this.w && mouseY > this.posReal.y && mouseY < this.posReal.y + this.h) {
            return true;
        } else {
            return false;
        }
    }

    draw() {
        if (this.mHovers())
            this.brightness = (0, 125);
        else {
            this.brightness = (255);
        }

        if (this.shot && this.shipPart == undefined) {
            this.brightness = color(0, 0, 255);
        } else if (this.shot && this.shipPart != undefined) {
            this.brightness = color(255, 0, 0);
        }

        fill(this.brightness);
        stroke(0);
        rect(this.posReal.x, this.posReal.y, this.w, this.h);

        textSize(10);
        fill(0);
        //text(this.posReal.x + "," + this.posReal.y, this.posReal.x + 2, this.posReal.y + 11);
        //text(this.brightness, this.posReal.x + 2, this.posReal.y + 47);
    }
}