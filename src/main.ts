const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.fillRect(100, 50, 100, 100);
  ctx.drawImage(
    playerImage,
    0,
    0,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight,
  );
  requestAnimationFrame(animate);
}

animate();
