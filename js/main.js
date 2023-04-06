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

const player = new Player(71, 380, 30, 'aqua', { x: 0, y: 0 });
player.draw();

const rect = new Rectangle({
  position: {
    x: 450,
    y: 250,
  },
});

const movePlayer = (event) => {
  const angle = Math.atan2(event.offsetY - player.y, event.offsetX - player.x);
  const velocity = {
    x: Math.cos(angle) * 2,
    y: Math.sin(angle) * 2,
  };
  player.velocity = velocity;
};

const stopPlayer = () => {};

function animate() {
  requestAnimationFrame(animate);
  cc.clearRect(0, 0, canvas.width, canvas.height);

  //Drawing our objects
  boundaries.forEach((el) => el.draw());
  player.update();

  boundaries.forEach((el) => {
    if (RectCircleColliding(el, player)) player.velocity = { x: 0, y: 0 };
  });
}

window.addEventListener('click', movePlayer);

animate();
