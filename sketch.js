
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var floor,bintrash1,bintrash2,bintrash3;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(50,400,20);
	floor = new Floor (600,550,1200, 20);
	bintrash1  = new Bin (1000,550,200,20);
	bintrash2  = new Bin (1090,490,20,100);
	bintrash3  = new Bin (910,490,20,100);
	
	Engine.run(engine);
  
}
function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);

 /* if(keyDown("w")){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85 })
  }*/

  paperBall.display();
  floor.display();
  bintrash1.display();
  bintrash2.display();
  bintrash3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85 })
  }
}