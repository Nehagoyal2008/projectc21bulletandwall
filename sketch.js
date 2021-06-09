var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  console.log(speed);
  weight=random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";

  wall = createSprite(1350,200,60,height/2);
  wall.shapeColor="grey";


 
}

function draw() {
  background("black");
  
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/225009;
    console.log(deformation);
    if(deformation<40)
    {
      wall.shapeColor="red";
    }
    
    if(deformation>100)
    {
      wall.shapeColor="green";
      
    }
  }

  drawSprites();

}
