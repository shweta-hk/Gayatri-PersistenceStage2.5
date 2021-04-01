
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var boy ,rope  ;
var boyImage,stoneImage,ropeImage;
var ropeSprite,boySprite;

function preload()
{
  boyImage = loadImage("sprites/boy3.png");
	stoneImage = loadImage("sprites/rock2.png");
  ropeImage = loadImage("sprites/rope.png");
}

function setup() {
	createCanvas(1200, 1000);
  rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,height,1200,20);
  boy=new Boy(600,height-100);
  rope=new Rope(boy.body,{ x: 600, y: 0 })

   //Create the Sprites Here.
  boySprite = createSprite(600,height-100,20,50);
  boySprite.addImage("boyClimbing",boyImage);

  ropeSprite = createSprite(600,300,20,50);
  ropeSprite.addImage("rope",ropeImage);
  ropeSprite.scale =0.2; 
  
  
 
  //create Stone Groups
  stonesGroup = createGroup();
  Engine.run(engine);

}
function draw() {
  
  background(0);
  Engine.update(engine);
  rope.display();
 
 boySprite.x= boy.body.position.x 
 boySprite.y= boy.body.position.y 


 

 spawnStones();

 drawSprites();
}



function spawnStones(){
  if (frameCount % 120 === 0) {
      var stone = createSprite(0,120,40,10);
      stone.y = Math.round(random(50,height-200));
      stone.addImage(stoneImage);
      stone.scale = 0.2;
      stone.velocityX = 3;
      stone.lifetime = 500;
     
      //adjust the depth
      boySprite.depth = stone.depth;
      boySprite.depth = boySprite.depth + 1;
      ropeSprite.depth = boySprite.depth + 1;


      stonesGroup.add(stone);
  }
}