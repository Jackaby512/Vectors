class Spongebob {
  constructor (x,y,m){
    this.loc = createVector (x,y);
    this.acc = createVector (0,0);
    this.vel = createVector (0,0);
    this.mass = m;
  }
  
  update() {
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.acc.set(0.1,0.1);
  }
  
  display(){
    noStroke();
    fill('orange');
    rect(this.loc.x, this.loc.y, 20, 20);
  }
  
  colorChange(){
    if (this.loc.x > 200 && this.loc.y > 200){
    fill('yellow');
    rect(this.loc.x, this.loc.y, 20, 20);  
  }
    
  }
  
  colorChanging(){
    if (this.loc.x > 200 && this.loc.y > 200){
    fill('blue');
    rect(this.loc.x, this.loc.y, 20, 20);  
  }
  }
  
  repel(){
    if (this.loc.x > 390 || this.loc.x < 0){
      this.vel.x *= -1
  }
    if (this.loc.y > 390 || this.loc.y < 0){
      this.vel.y *= -1
  }
    
  }
}

