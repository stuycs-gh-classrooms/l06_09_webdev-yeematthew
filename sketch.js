var theta, fillcolor, radius, x, y, angle, newX, newY, count;

function setup(){
  createCanvas(400,400);
  theta = 0;
  fillcolor = 0;
  x = width/2;
  y = height/2;
  radius = 100;
  frameRate(60);
  count = 0;
}

function draw(){
  background(255);
  newY = newY(radius, y, theta);
  newX = newX(radius, x, theta);
  fill(0,fillcolor,0);
  circle(newX, newY,50);
  fill(0);
  line(x,y,newX,newY);
  theta += 1;
  count += 1;
  if (count%60 == 0){
    fillcolor += 10;
  }
  if (255<fillcolor){
    fillcolor = 0;
  }
};

function newX (radius, x, angle){
  return x + (radius * cos(radians(angle)));
};

function newY (radius, y, angle){
  return y + (radius * sin(radians(angle)));
};

