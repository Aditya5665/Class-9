var rectangle;
function setup() {
  createCanvas(400,400);
  rectangle = createSprite(200,200,50,60);
  rectangle.shapeColor = "red";
}

function draw() 
{
  background(30);
  rectangle.x = World.mouseX;
  rectangle.y = World.mouseY;
  drawSprites();
}




