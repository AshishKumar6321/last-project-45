var lion,monkey,cheeetha;
var lion1,monkey1,cheetha1


function preload(){
  lion=loadAnimation("images/ lion.gif");
  monkey=loadAnimation("images/monkey.gif");
 cheetha =loadAnimation("images/cheetha.gif");
 backgroundImg=loadImage("images/backgroundImg.png");
 ground=loadImage("images/ground.png");
 background1=loadImage("images/background.jpg");
 manpower=loadAnimation("images/manpower.gif");
 robert=loadAnimation("images/robert.gif");
 robertimg=loadAnimation("images/robert1.gif");
 superman=loadAnimation("images/superman.gif");
 villan1=loadAnimation("images/villan1.gif");
 villan2=loadAnimation("images/villan2.gif");
 villan3=loadAnimation("images/villan3.gif");
 coin=loadImage("images/coin.jpg");

  
}
function setup(){
  var canvas=createCanvas(1200,800);
  ground = createSprite(100,700,800,10);
  ground.addImage("ground",groundImage);
  ground.addImage("background1",backgroundImg1);
  ground.addImage("background2",backgroundImg2);
  ground.velocityX= -4;
  ground.scale = 1.3;
  invisibleground = createSprite(100,750,800,10);
  invisibleground.visible = false;

 lion1=createSprite(400,500,10,20);
 lion1.addImage("lion1",lion);
 lion1.scale =0.2;

 monkey1=createSprite(500,400,10,20);
 monkey1.addImage("monkey1",monkey);
 monkey1.scale =0.2;

 cheetha1=createSprite(750,400,10,20);
 cheetha1.addImage("cheetha1",cheetha);
 cheetha1.scale=0.2;

 manpower1=createSprite(750,400,10,20);
 manpower1.addImage("manpower1",manpower);
 manpower1.scale=0.2;
 
 robert1=createSprite(600,200,10,20);
 robert1.addImage("robert1",robert);
 robert1.scale=0.2;

 coin1=createSprite(300,200,10,20);
 coin1.addImage("coin1",coin);
 coin1.scale=0.2;

 robertimg1=createSprite(200,100,10,20);
 robertimg1.addImage("robertimg1",robertimg);
 robertimg1.scale=0.2;

 superman1=createSprite(700,650,10,20);
 superman1.addImage("superman1",superman);
 superman1.scale=0.2;
  
 villanimg1=createSprite(800,700,10,20);
 villanimg1.addImage("villanimg1",villan1);
 villanimg1.scale=0.2;

 villanimg2=createSprite(900,800,10,20);
 villanimg2.addImage("villanimg2",villan2);
 villanimg2.scale=0.2;

 villanimg3=createSprite(500,400,10,20);
 villanimg3.addImage("villanimg3",villan3);
 villanimg3.scale=0.2;

 

}


function draw(){
  background(backgroundImg);
  
 //villan.velocityY = villan.velocityY + 0.8
  if(ground.x<0){
    ground.x =ground.width/2;
  }

  if(keyDown("UP_ARROW")){
    lion1.velocityY=-9;
    
  }
  lion1.velocityY=lion1.velocityY+0.9;
liom1.collide(invisibleground);
 villian();
drawSprites();

}
/*
function villan(){
  if(frameCount % 60 === 0) {
    var vallian = createSprite(600,height-95,20,30);
   villan.velocityX = -(6 + 3*score/100);
}*/

function keyPressed(){
if(keyCode===39){
lion1.x=lion1.x+4;
}

}







