const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	image_1 = loadImage("sprites/sprites/boy.png");
	image_2 = loadImage("sprites/sprites/tree.png");

}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(100,480,20);
	
	ground = new Ground(400,575,790,20);

	mango1 = new Mango(520,200,20);
	mango2 = new Mango(570,90,20);
	mango3 = new Mango(750,240,20);
	mango4 = new Mango(680,100,20);
	mango5 = new Mango(620,270,20);
	mango6 = new Mango(680,200,20);
	

	rope =new Rope(stone.body,{x:100,y:480})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(205,205,205);
  
  drawSprites();
 
  image(image_1,70,420,150,200);
  image(image_2,450,30,350,550);
 
stone.display();

ground.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
rope.display();

}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){

	if(keyCode === 32){
Matter.Body.setPosition(stone.body, { x:100, y:480 })
rope.attach(stone.body);
	}

}