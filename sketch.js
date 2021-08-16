var PLAY = 1;
var END = 0;
var gameState = PLAY;
var man_running, man_runningImg
var bushGroup, bushImg
var jungle, jungleImg
var gameOver, GameOverImg
var invisbleGround
var score


function preload(){
jungleImg = loadImage("jungle_background.png");
man_runningImg = loadImage("man_running_gif.gif");
bushImg = loadImage("unnamed.png");
gameOverImg = loadImage("gameOver.png");
}

function setup() {
createCanvas(1000, 500);
man_running = createSprite(100,500,20,50);
man_running.addImage(man_runningImg);
man_running.scale = 0.5;
 
jungle = createSprite(10,180,400,20);
jungle.addImage(jungleImg);
jungle.x = jungle.width /2;

gameOver = createSprite(300,100);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5;


invisibleGround = createSprite(250,500,1000,100);

gameOver.visible = false;
bushGroup = createGroup();
score = 0
}


function draw() {
    background(180);
    text("Score: "+ score, 500,50);
     
  if(gameState === PLAY){
    
    jungle.velocityX = -8;
    
    score = score + Math.round(frameCount/60);
    
    if (jungle.x < 10){
      jungle.x = jungle.width/1;
    }
    
    if(keyDown("space")&& man_running.y >=100) {
        man_running.velocityY = -13;
    }
    man_running.velocityY = man_running.velocityY + 0.8
  
    spawnBush();
    
    if(bushGroup.isTouching(man_running)){
        gameState = END;
    }
  }
   else if (gameState === END) {
    gameOver.visible = true;

    jungle.velocityX = 0;
     
    man_running.velocityY=0;
    man_running.visible = false;

    bushGroup.setLifetimeEach(-1)
    bushGroup.setVelocityXEach(0);
    }
    
 
jungle.depth = man_running.depth;
man_running.depth = man_running.depth + 1;

jungle.depth = jungle.depth -10
 
 drawSprites();   
}

function spawnBush() {
    //write code here to spawn the clouds
     if (frameCount % 100 === 0) {
       bush = createSprite(600,450,10,40);
       var rand = Math.round(random(490,500));
       bush.addImage(bushImg);
       bush.scale = 0.5;
       bush.velocityX = -3;
       bush.lifetime = 134;      
      //adding cloud to the group
     bushGroup.add(bush);
      }
  }
  
  