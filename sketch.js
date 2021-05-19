const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snowman, snowmanImg;
var snow3=[];
var backgroundImg

function preload() {
   
  backgroundImg = loadImage("snow1.jpg");


}


function setup() {

  createCanvas(1600,850);

  engine = Engine.create();
  world = engine.world;

  if(frameCount% 180 === 0) {
    
    for(i = 1; i<100; i++) {
      snow3.push(new snow(random(10,1500), random(0,50)));
    }
    
  }


}

function draw() {

  background(backgroundImg);  
  Engine.update(engine);
  
  for(var i = 1;i < 10; i++){
    snow3[i].display();
    snow3[i].changePosition();
    }    
  


  drawSprites();
}