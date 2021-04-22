class Squidward {
  constructor(xSpeed, ySpeed) {
    this.pos = createVector(0,200);
    this.vel = createVector(xSpeed, ySpeed);
  }

  show() {
    fill('green');
    noStroke();
    circle(this.pos.x, this.pos.y, 24);
  }

  move() {
    this.pos.add(this.vel); }

  bounce() {
    if (this.pos.x > 150 || this.pos.x < 0) this.vel.x *= -1;
    if (this.pos.y > 150 || this.pos.y < 0) this.vel.y *= -1;
  }
  
  change() {
    if (this.pos.x > 150 && this.pos.y > 150){
      fill(random(colors));
      circle(this.pos.x, this.pos.y, 24);
    }
  }
  
  circleChange() {
    if (this.pos.x > 150 && this.pos.y > 150){
      fill('pink');
      ellipse (width/2, height/2, 70, 70);
    }
  }
  
  
}