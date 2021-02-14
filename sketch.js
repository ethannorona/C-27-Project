
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope1, rope2, rope3, rope4, rope5;
var roofObject;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter=40; 
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500; 
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	roofObject = new roof(width/2, height/4, width/7, 20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireFrames: false
		}
	});

	rope1 = new rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0);
	rope2 = new rope(bobObject2.body, roofObject.body, -bobDiameter*1, 0);
	rope3 = new rope(bobObject3.body, roofObject.body, 0, 0);
	rope4 = new rope(bobObject4.body, roofObject.body, bobDiameter*1, 0);
	rope5 = new rope(bobObject5.body, roofObject.body, bobDiameter*2, 0);
	console.log(bobObject1.body);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:10,y:-15});
	}
}

function drawLine(constraint){
	bobBodyPosition = constraint.bodyA.position;
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX = roofBodyPosition.x + roofBodyOffset.x;
	roofBodyY = roofBodyPosition.y + roofBodyPosition.y;
	line(bobBodyPosition.x, bobBodyPosition.y, roofBody.x, roofBodyY);
}