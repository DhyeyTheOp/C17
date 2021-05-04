
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey =  createSprite(100,500,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.2;
  
  
  ground = createSprite(300,570,600,20);
  ground.x = ground.width/2

  obstacleGroup = createGroup;
  FoodGroup = createGroup;
  
 score = 0;
  
}


function draw() {
 background("green");
  
  
 if(ground.x < 0){
   ground.x = ground.width/2;
 }
  spawnObstacles();
  spawnBanana();
  

if(keyDown("sapce")&& monkey.y >=300){
  monkey.velocityX = -12;
}
  
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destoryEach();
    score=score+1
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  monkey.collide(gorund);
  
  
  drawSprite();
  fill("white")
  text("score: "+score,500,50)
  
  fill("black");
  textSize(20)
  survivalTime=Math.ceil(freameCount/freamRate())
  text("Survival Time: "+ survivalTime, 100, 50)
}


function spawnObstacles(){
if(frameCount % 150 === 0){
  var obstacle = createSprite(500,530,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -6;
  
  
  var rand = Math.round(random(1));
  switch(rand){
    case 1: obstacle.addImage(obstacleImage);
      break;
      default: break;
  }
  
  
  obstacle.scale = 0.25;
  obstacle.lifetime = 500;
  
  
  obstcleGroup.add(obstcale);
}
  
 function spawnBanana(){
   
   if(frameCount % 160 === 0){
     banana = createSprite(600,100,40,10);
     banana.y = Math.round(random(250,300));
     banana.addImage(bananaImage);
     banana.sacle = 0.2;
     banana.velocityX = -3;
     
     
     monkey.lifetime = 500;
     
     
     banana.depth = monkey.depth;
     banana.depth = monkey.depth + 1
     
     
     
     bananaGroup.add(banana);
   }
 }
  
  
  
  
  
  
}






