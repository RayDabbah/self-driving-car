class Car {
    x;
    y;
    width;
    height;
    controls;
    speed = 0;
    friction = 0.5;
    acceleration = 0.2;

    constructor(x, y, width, height) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.controls = new Controls();

    }


    update() {
        if (this.controls.forward) {
            this.speed += this.acceleration
        }
        if (this.controls.reverse) {
            this.speed -= this.acceleration
        }
        this.y -= this.speed
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
        ctx.fill()
    }


}