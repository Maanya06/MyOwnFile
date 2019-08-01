var fixedRect,movingRect,sq1,sq2,bounce1,bounce2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 100);
  fixedRect.shapeColor="red";
  movingRect =createSprite(500,200,80,30);
  movingRect.shapeColor="yellow";  
  sq1 = createSprite (200,300,75,75);
  sq2 = createSprite (400,300,70,70);
  sq1.velocityX = 3;
  sq2.velocityX = -3;
  bounce1 = createSprite (200,100,75,75);
  bounce2 = createSprite (400,100,70,70);
  bounce1.velocityX = 3;
  bounce2.velocityX = -3;
}

function draw() {
    background(0,0,0); 
    movingRect.x=World.mouseX;
    movingRect.y=World.mouseY;
  if(checkTouch(sq1,sq2)){
    sq1.shapeColor = "green";
    sq2.shapeColor = "orange";
  }
  
  else{
    sq1.shapeColor = "white";
    sq2.shapeColor = "white";
  }
  if(checkTouch(fixedRect,movingRect)){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "white";
    fixedRect.velocityY = -2;
    fixedRect.velocityX = 2;
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="yellow";  
  }
   
  checkbounce(bounce1,bounce2);
  drawSprites();
}
function checkbounce(object1,object2)  {
  if (object1.x - object2.x < object1.width/2 + object2.width/2
      && object2.x - object1.x < object1.width/2 + object2.width/2) 
   {
       object1.velocityX = object1.velocityX * (-1);
       object2.velocityX = object2.velocityX * (-1);
   }
  if(    object2.y - object1.y < object1.height/2 + object2.height/2
      && object1.y - object2.y < object1.height/2 + object2.height/2) 
      {
       object1.velocityY = object1.velocityY * (-1);
       object2.velocityY = object2.velocityY * (-1);
      }
}




