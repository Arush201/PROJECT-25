
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObj,dustbinObj;

function preload(){
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObj = new Paper(120,450,70)
	ground = new Ground(width/2,600,width,20)
	dustbinObj = new Dustbin(1000,60,1000,450)
	


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER)
  background(210)
  paperObj.display()
  ground.display()
  dustbinObj.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:250,y:-450})
	}
	
}


