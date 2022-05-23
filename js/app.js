const canvas = document.getElementById('road')

canvas.width = '400'

const ctx = canvas.getContext('2d')

const road = new Road(12, canvas.width - 24)

const car = new Car(road.getLaneCenter(3), 500, 30, 50)

animate();

function animate() {
    canvas.height = window.innerHeight;
    car.update();

    ctx.save()
    ctx.translate(0, -car.y + canvas.height*.7)

    road.draw(ctx)
    car.draw(ctx)

    ctx.restore()

    requestAnimationFrame(animate)

}