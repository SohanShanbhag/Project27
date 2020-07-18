const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var support;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	support = new Support(width/2, 50, 700, 20);

	bobDiameter = 40;

	bob1 = new Bob(270,400,bobDiameter,bobDiameter);
	bob2 = new Bob(280,400,bobDiameter,bobDiameter);
	bob3 = new Bob(350,400,bobDiameter,bobDiameter);
	bob4 = new Bob(420,400,bobDiameter,bobDiameter);
	bob5 = new Bob(490,400,bobDiameter,bobDiameter);
	bob6 = new Bob(560,400,bobDiameter,bobDiameter);
	bob7 = new Bob(630,400,bobDiameter,bobDiameter);
	bob8 = new Bob(700,400,bobDiameter,bobDiameter);
	bob9 = new Bob(770,400,bobDiameter,bobDiameter);

	chain = new Chain(bob1.body, support.body, -280, 0);
	chain2 = new Chain(bob2.body, support.body, -210, 0);
	chain3 = new Chain(bob3.body, support.body, -140, 0);
	chain4 = new Chain(bob4.body, support.body, -70, 0);
	chain5 = new Chain(bob5.body, support.body, 0, 0);
	chain6 = new Chain(bob6.body, support.body, 70, 0);
	chain7 = new Chain(bob7.body, support.body, 140, 0);
	chain8 = new Chain(bob8.body, support.body, 210, 0);
	chain9 = new Chain(bob9.body, support.body, 280, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  support.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  bob8.display();
  bob9.display();

  chain.display();	
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  chain7.display();
  chain8.display();
  chain9.display();
  
  drawSprites();
	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		//Matter.Body.setStatic(bob1.body, false);
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-110, y:-45})
	}
}