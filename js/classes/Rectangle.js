import { cc } from '../main.js';
export default class Rectangle {
  constructor({ position }, width = 150, height = 200) {
    this.position = position;
    this.width = width;
    this.height = height;
  }

  draw() {
    cc.fillStyle = 'red';
    cc.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
