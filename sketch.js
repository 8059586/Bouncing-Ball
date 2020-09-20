const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200,390,400,50,{isStatic:true});
  ball = Bodies.circle(200,100,20,{restitution:1.75});
  World.add(world,ball);
  World.add(world,ground);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}