var police,policeimage;
var theif,theifimg;
var backgroundimg,background1;
var car1,carim;
var car2,carig;
var dustbin,dustbinimg;
var roadblocker,roadblockerimg;
var gameOver,gameOverImg;
var invisibleGround;
var obstaclesGroup;
function preload(){

backgroundimg=loadImage("./PNG/background22.png")

policeimage=loadAnimation("./PNG/police1.png","./PNG/police2.png")
theifimg=loadAnimation("./PNG/1theif.png","./PNG/2theif.png")

carim=loadImage("./PNG/car1.png")
carig=loadImage("./PNG/c3car.png")

dustbinimg=loadImage("./PNG/dustbin.png")
roadblockerimg=loadImage("./PNG/road blocker.png")

gameOverImg=loadImage("./PNG/game_over_PNG56.png")

}
function setup(){
createCanvas(480,360)
background1=createSprite(240,180,480,360)
background1.addImage("bg",backgroundimg)
//background1.velocityX = -5
//background1.velocityX = -(6 + 3*score/100);
  
if(background1.x<0){
  background1.x= background1.width/10
}


police=createSprite(100,200,50,50)
police.addAnimation("police",policeimage)
police.velocityX=3

theif=createSprite(200,200,50,50)
theif.addAnimation("theif1",theifimg)
theif.velocityX=3

//car1=createSprite(200,100,50,50)
//car1.addAnimation("theif2",carim)
//car1.scale=0.5;

//car2=createSprite(200,200,50,50)
//car2.addAnimation("theif3",carig)
//car2.scale=0.5;

//dustbin=createSprite(300,100,50,50)
//dustbin.addAnimation("theif4",dustbinimg)
//dustbin.scale=0.5;

//roadblocker=createSprite(400,100,10,10)
//roadblocker.addAnimation("theif5",roadblockerimg)
//roadblocker.scale=0.5;


//gameOver = createSprite(300,100);
//gameOver.addImage(gameOverImg);
//gameOver.visible = false;
//gameOver.scale = 0.5;

//invisibleGround = createSprite(200,190,400,10);
//invisibleGround.visible = false;


}
function draw(){
background(255)
if(background1.x<0){
  background1.x= background1.width/10
}

if(keyDown("space") && police.y >= 159) {
  police.velocityY = -12;
}

  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(car1);
              break;
      case 2: obstacle.addImage(car2);
              break;
      case 3: obstacle.addImage(dustbin);
              break;
      case 4: obstacle.addImage(roadblocker);
              break;
      default: break;
    }
    
       
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle);
  }
}
