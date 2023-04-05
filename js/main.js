import Boundary from './classes/Boundary.js';
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

boundaries.forEach((el) => el.draw());
