const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  
}

function draw() {

  Matter.composite.add(bridge.body, jointPoint);
  jointLink = new Link(Bridge, jointPoint);

  for ( var i = 0; i <= 8; i =++ ) {
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    var Stone = new Stone(x, y,  80, 80);
    Stones.push(Stone);

  }
  background(51);
  Engine.update(engine);

}
