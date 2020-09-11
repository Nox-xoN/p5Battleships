class Boardcell {
    constructor(x, y, xReal, yReal, w, h, brightness = 255) {
        this.x = x;
        this.y = y;
        this.xReal = xReal;
        this.yReal = yReal;
        this.w = w;
        this.h = h;
        this.brightness = brightness;
        this.occupied = false;
        this.shippart;
        this.centerX = this.xReal + (this.w / 2);
        this.centerY = this.yReal + (this.h / 2);
    }

    mHovers() {
        if (mouseX > this.xReal && mouseX < this.xReal + this.w && mouseY > this.yReal && mouseY < this.yReal + this.h) {
            return true;
        } else {
            return false;
        }
    }

    draw() {
        if (this.mHovers())
            this.brightness = (0, 125);
        else
            this.brightness = (255);

        if (this.occupied)
            this.brightness = (65);

        fill(this.brightness);
        stroke(0);
        rect(this.xReal, this.yReal, this.w, this.h);

        textSize(10);
        fill(0);
        text(this.xReal + "," + this.yReal, this.xReal + 2, this.yReal + 11);
        text(this.brightness, this.xReal + 2, this.yReal + 47);
    }
}