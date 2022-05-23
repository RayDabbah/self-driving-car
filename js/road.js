class Road {
    x;
    top;
    bottom;
    width;
    borders;
    laneCount;

    constructor(x, width, laneCount = 4) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        const infinity = 20_000_000;
        this.top = -infinity;
        this.bottom = infinity;

        this.borders = [
            [{x: this.x, y: this.top}, {x: this.x, y: this.bottom}],
            [{x: this.x + this.width, y: this.top}, {x: this.x + this.width, y: this.bottom}],
        ];

    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'white';


        for (let i = 1; i <= this.laneCount - 1; i++) {


            ctx.setLineDash([50, 20]);


            const x = lerp(this.x, this.x + this.width, i / this.laneCount)

            ctx.beginPath();
            ctx.moveTo(x, this.top)
            ctx.lineTo(x, this.bottom)
            ctx.stroke();
        }


        ctx.setLineDash([]);
        this.borders.forEach(border => {

            ctx.beginPath()
            ctx.moveTo(border[0].x, border[0].y)
            ctx.lineTo(border[1].x, border[1].y)
            ctx.stroke()

        })


    }

    getLaneCenter(laneNumber) {
        const laneWidth = this.width / this.laneCount;

        return this.x + (laneWidth / 2) + laneNumber * laneWidth
    }

}