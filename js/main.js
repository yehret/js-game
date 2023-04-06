import Boundary from './classes/Boundary.js';
import Player from './classes/Player.js';
import Rectangle from './classes/Rectangle.js';
import { RectCircleColliding } from './scripts/RectAndCircle.js';
const canvas = document.querySelector('canvas');
// cc - canvas context
export const cc = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

const boundaries = [
  new Boundary(
    {
      position: {
        x: 0,
        y: 0,
      },
    },
    800,
    40,
  ),
  new Boundary(
    {
      position: {
        x: 0,
        y: 40,
      },
    },
    40,
    760,
  ),
  new Boundary(
    {
      position: {
        x: 760,
        y: 40,
      },
    },
    40,
    760,
  ),
  new Boundary(
    {
      position: {
        x: 40,
        y: 760,
      },
    },
    720,
    40,
  ),
];

const player = new Player(65, 380, 25, 'aqua', { x: 0, y: 0 });
player.draw();

let isReleased = false;

const movePlayer = (event) => {
  if (!isReleased) {
    const angle = Math.atan2(event.offsetY - player.y, event.offsetX - player.x);
    const velocity = {
      x: Math.cos(angle) * 8,
      y: Math.sin(angle) * 8,
    };
    player.velocity = velocity;
  }

  isReleased = true;
};

function animate() {
  requestAnimationFrame(animate);
  cc.clearRect(0, 0, canvas.width, canvas.height);

  //Drawing our objects
  boundaries.forEach((el) => el.draw());
  player.update();

  boundaries.forEach((el) => {
    if (RectCircleColliding(el, player)) {
      player.velocity = { x: 0, y: 0 };
      isReleased = false;
    }
  });
}

window.addEventListener('click', movePlayer);

animate();
