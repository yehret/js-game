import { cc } from '../main.js';
export default class Player {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    cc.beginPath();
    cc.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    cc.fillStyle = this.color;
    cc.fill();
  }

  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}
