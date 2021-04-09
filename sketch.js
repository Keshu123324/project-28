
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var Boy,BoyImage,treeObj,ground,Stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var rope1;

function preload()
{
BoyImage=loadImage("images/Plucking mangoes/boy.png");
}

 function setup() {
	createCanvas(1300,900);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
 ground=new Ground(700,800,1400,30);

 treeObj=new Tree(960,450);
 Stone=new stone(220,380,50);
 mango1=new mango(1200,450,60);
 mango2=new mango(1100,430,60);
 mango3=new mango(900,300,60);
 mango4=new mango(800,450,60);
 mango5=new mango(900,400,60);
 mango6=new mango(1000,300,60);
 mango7=new mango(800,260,60);
 mango8=new mango(1100,260,60);
 mango9=new mango(1000,190,60);

 rope1=new launcher(Stone.body,{x:220,y:380});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  textSize(30)
  text("Press Space to get a second chance",50,50);

  image(BoyImage,200,350,100,100);

  ground.display();
  treeObj.display()
  Stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  rope1.display();
 
  detectCollision(Stone,mango1);
  detectCollision(Stone,mango2);
  detectCollision(Stone,mango3);
  detectCollision(Stone,mango4);
  detectCollision(Stone,mango5);
  detectCollision(Stone,mango6);
  detectCollision(Stone,mango7);
  detectCollision(Stone,mango8);
  detectCollision(Stone,mango9);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(Stone.body, {x:mouseX, y:mouseY})

}

function mouseReleased(){
rope1.fly();

}

function keyPressed(){
  if(keyCode==32)
  {
    Matter.Body.setPosition(Stone.body, {x:220, y:380})
    rope1.attach(Stone.body)}
}

 function detectCollision(lStone,lmango){

    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lStone.body.position;

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
      if(distance<= lmango.r+lStone.r)
      {
        Matter.Body.setStatic(lmango.body,false);
      }
 }