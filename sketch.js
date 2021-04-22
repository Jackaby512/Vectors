var spongebob;
var spongebob1;
var squidward;
var colors;

function setup(){
  createCanvas (400, 400);
  spongebob = new Spongebob (0,0);
  spongebob1 = new Spongebob (40,0);
  squidward = new Squidward (10, 0);
  colors = ['black', 'white', 'magenta', 'purple', 'brown']
}

function draw(){
  background('pink');
  
  fill ('red');
  noStroke();
  ellipse (width/2, height/2, 70, 70);
  
  spongebob.update();
  spongebob.display();
  spongebob.colorChange();
  spongebob.repel();
  
  spongebob1.update();
  spongebob1.display();
  spongebob1.colorChanging();
  spongebob1.repel();
  
  squidward.show();
  squidward.bounce();
  squidward.move();
  squidward.change();
  squidward.circleChange();
}