var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;

	ball=new Ball(200,100,30);
	groundBody=Bodies.rectangle(600,650,1200,5,{isStatic:true});
	World.add(world,groundBody);
	ground=createSprite(600,650,1200,5);
	box1=new Box(700,600,10,100);
	box2=new Box(900,645,400,10);
	box3=new Box(1100,600,10,100);
	
	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.x=groundBody.position.x;
  ground.y=groundBody.position.y;
  rect(groundBody.position.x,groundBody.position.y,1200,5)	
  ball.display();
  box1.display();
  box2.display();
  box3.display();
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}

