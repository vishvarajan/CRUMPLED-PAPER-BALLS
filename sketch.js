
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var base
var wall1
var wall2


function preload()
{
	


}

function setup() {
	createCanvas(1360, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	base=new Base(1360,620,3000,20)	
wall1=new Base(1000,620,10,200)	
wall2=new Base(1200,620,10,200)	



var ball_options={

isStatic:false,
restitution:0.3,
friction:0,
density:1.2





}

ball = Bodies.circle(100,50,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);

	

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS); 
 
  background(0);


ellipse(ball.position.x,ball.position.y,20)


base.show()
 wall1.show()
 wall2.show()

Engine.update(engine)

}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-5})

}

}

