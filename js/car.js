class Car {
    x;
    y;
    width;
    height;
    controls;
    speed = 0;
    angle = 0;
    maxSpeed = 3;
    friction = 0.03;
    acceleration = 0.2;

    constructor(x, y, width, height) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.controls = new Controls();
        this.carImage = new Image();
        this.carImage.src = 'car.svg'

    }

    update() {
        this.#move();
    }


    #move() {
        if (this.controls.forward) {
            this.speed += this.acceleration
        }
        if (this.controls.reverse) {
            this.speed -= this.acceleration
        }


        if (this.speed > 0) {
            this.speed = Math.min(this.speed, this.maxSpeed) - this.friction
        }

        if (this.speed < 0) {
            this.speed = Math.max(-(this.maxSpeed / 2), (this.speed)) + this.friction
        }


        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0
        }

        if (this.speed !== 0) {
            const flip = this.speed > 0 ? 1 : -1;


            if (this.controls.left) {
                this.angle += 0.02 * flip
            }
            if (this.controls.right) {
                this.angle -=  0.02 * flip
            }
        }



        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
    }

    draw(ctx) {


        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(-this.angle)
        ctx.drawImage(this.carImage, -this.width / 2, -this.height / 2, this.width, this.height)
        ctx.restore()
    }


}