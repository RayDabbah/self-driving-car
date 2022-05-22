class Road {
    x;
    width;
    laneCount;

    constructor(x, width, laneCount = 4) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'white';

        const infinity = 20_000_000;

        for (let i = 0; i <= this.laneCount; i++) {


            if (i === 0 || i === this.laneCount) {
                ctx.setLineDash([]);
                console.log(i);
            } else {
                ctx.setLineDash([50, 20]);

            }

            const x = lerp(this.x, this.x + this.width, i / this.laneCount)

            ctx.beginPath();
            ctx.moveTo(x, -infinity)
            ctx.lineTo(x, infinity)
            ctx.stroke();
        }

    }

    getLaneCenter(laneNumber) {
        const laneWidth = this.width / this.laneCount;

        return this.x + (laneWidth / 2) + laneNumber * laneWidth
    }

}