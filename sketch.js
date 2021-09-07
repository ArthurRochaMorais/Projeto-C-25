
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papel;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);



	papel = new Paper(390,592,0,0);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  papel.display();
  keyPressed();

}



// Andrea, não estava conseguindo usar o paper.js sem deixar o isStatic: true, sempre que deixava 
// ele false o codigo não funcionava,deixei o codigo comentado, mas usei o que pediram no material



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.bodypostion,{x:130,y:145})
	}
}

