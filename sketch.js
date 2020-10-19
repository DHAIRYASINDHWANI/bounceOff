var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);

  //creating sprites
  fixedRect = createSprite(500, 100, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  ob1 = createSprite(100, 100, 50, 50);
  ob1.shapeColor="green";
  ob2 = createSprite(200, 100, 50, 50);
  ob2.shapeColor="green";
  ob3 = createSprite(300, 100, 50, 50);
  ob3.shapeColor="green";
  ob4 = createSprite(400, 100, 50, 50);
  ob4.shapeColor="green";
  movingRect.velocityY= 5;
  fixedRect.velocityY = -5;
}


function draw() {
  background(0);  
  movingRect.x =World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(ob1,movingRect)){
    movingRect.shapeColor ="red";
    ob1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    ob1.shapeColor = "green";
  }

  BounceOff(movingRect,fixedRect);
  drawSprites();
}

