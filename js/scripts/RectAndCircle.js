export function RectCircleColliding(rect, circle) {
  var dx = Math.abs(circle.x - (rect.position.x + rect.width / 2));
  var dy = Math.abs(circle.y - (rect.position.y + rect.height / 2));

  if (dx > circle.radius + rect.width / 2) {
    return false;
  }
  if (dy > circle.radius + rect.height / 2) {
    return false;
  }

  if (dx <= rect.width) {
    return true;
  }
  if (dy <= rect.height) {
    return true;
  }

  var dx = dx - rect.width;
  var dy = dy - rect.height;

  let collision = dx * dx + dy * dy <= circle.radius * circle.radius;
  return collision;
}

// dx * dx + dy * dy <= circle.radius * circle.radius
