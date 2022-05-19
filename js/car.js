class Car {
    x;
    y;
    width;
    height;
    controls;
    speed = 0;
    maxSpeed = 3;
    friction = 0.03;
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

        if(this.controls.left){
            this.x--
        }
        if(this.controls.right){
            this.x++
        }

        if (this.speed > 0) {
            this.speed = Math.min(this.speed, this.maxSpeed) - this.friction
        }

        if (this.speed < 0) {
            this.speed = Math.max(-(this.maxSpeed / 2), (this.speed)) + this.friction / 2
        }

        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0
        }
        this.y -= this.speed
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
        ctx.fill()
    }


}