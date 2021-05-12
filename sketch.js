const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup()
{
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(825,350,50,50);
    box2 = new Box(685,350,50,50);
    box3 = new Box(685,280,50,50);
    box4 = new Box(825,280,50,50);
    box5 = new Box(767,210,50,50);

    ground = new Ground(500,height,1000,20);

    log = new Log(757, 320,200,PI/2);
    log2 = new Log(757,240,200,PI/2);
    log3 = new Log(730,200, 120, PI/7);
    log4 = new Log(805,200,120, -PI/7)

    pig = new Pig(757, 355);
    pig2 = new Pig(757, 280);
}

function draw()
{
    background(162, 202, 224);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();

    pig.display();
    pig2.display();

    log.display();
    log2.display();
    log3.display();
    log4.display();

    textSize(30);
    text(" x : "+mouseX+" y : "+mouseY,mouseX,mouseY);
}