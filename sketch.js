var car,wall;
var object1,object2;

function setup() {
 createCanvas(1600,400);

car=createSprite(50,300,40,40);
car.shapeColor="orange";
car.velocityX=5;

wall=createSprite(1200,200,60,height/2);
wall.shapeColor="yellow";
}

function draw() {
 background(0);








 

 if(isTouching(car,wall))
 {
wall.shapeColor="pink";

car.velocityX=-8;
 }
 
 drawSprites();
}
