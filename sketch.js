const Bodies = Matter.Bodies;
const Engine = Matter.Engine ;
const World = Matter.World;

var engine , world;
var ground;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 

var options = {
  isStatic : true 
}

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(200, 390, 200, 20);


}

function draw() {
  background("black"); 

  Engine.update(engine);
 //rectMode(CENTER);
  rect(ground.position.x , ground.position.y , 400, 20); 
  
}