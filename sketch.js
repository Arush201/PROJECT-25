
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObj,DustbinObj;

function preload(){
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,600)
	ground = new Ground(600,height,1200,20)
	box1 = new Dustbin(900,630,200,20)
	box2 = new Dustbin(800,620,20,100)
	box3 = new Dustbin(1000,620,20,100)
	


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  box1.display()
  box2 .display()
  box3 .display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-450})
	}
	
}


