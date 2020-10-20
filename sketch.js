const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var MYengine,MYworld;
var ground,ball;
function setup(){
  createCanvas(400,400);
  MYengine=Engine.create();
  MYworld=MYengine.world;
  var rest={
    isStatic:true
  }
  var bounce={
    restitution:1
  }
  ground=Bodies.rectangle(200,390,400,20,rest);
  World.add(MYworld,ground);

  ball=Bodies.circle(200,200,50,bounce);
  World.add(MYworld,ball);
}

function draw(){
  background("pink");
  Engine.update(MYengine);
   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,20);
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,50,50);
}