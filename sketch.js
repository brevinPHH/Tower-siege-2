const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(900, 450, 500, 20);

  box1 = new Box(1100, 440, 50, 50);
  box2 = new Box(1060, 440, 50, 50);
  box3 = new Box(1010, 440, 50, 50);
  box4 = new Box(960, 440, 50, 50);
  box5 = new Box(910, 440, 50, 50);
  box6 = new Box(860, 440, 50, 50);
  box7 = new Box(810, 440, 50, 50);
  box8 = new Box(1080, 350, 40, 40);
  box9 = new Box(1030, 350, 40, 40);
  box10 = new Box(980, 350, 40, 40);
  box11 = new Box(930, 350, 40, 40);
  box12 = new Box(880, 350, 40, 40);
  box13 = new Box(830, 350, 40, 40);
  box14 = new Box(850, 250, 40, 40);
  box15 = new Box(950, 250, 40, 40);
  box16 = new Box(1050, 250, 40, 40);
  box17 = new Box(900,250,40,40);
  box18 = new Box(1000,250,40,40);
  box19 = new Box(950,150,50,50);
  box20 = new Box(900,150,50,50);
  box21 = new Box(1050,150,50,50);


  ball = new Ball(200, 300, 80, 80);
  rope = new Rope(ball.body, { x: 700, y: 250 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


