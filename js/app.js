const canvas = document.getElementById('road')

canvas.width = '400'

const ctx = canvas.getContext('2d')


const car = new Car(100, 500, 30, 50)

animate();

function animate() {
    canvas.height = window.innerHeight;
    car.update();

    car.draw(ctx)

    requestAnimationFrame(animate)

}