import { cc } from '../main.js';

export default class Boundary {
  constructor({ position }, width = 40, height = 40) {
    this.position = position;
    this.width = width;
    this.height = height;
  }

  draw() {
    cc.fillStyle = 'white';
    cc.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
