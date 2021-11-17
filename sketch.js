var bgimg,plrShip,alienCrft;
var alienlsr,plrlsr,plrlsr2,plrlsr3;
var lsrSound;
var score = 0;
var blast,blstimg;
function preload(){
 bgimg = loadImage("Background.jpg");
 plrShipimg = loadImage("Player Ship.jpg");
 plrlsrimg = loadImage("Player laser.jpg"); 
 lsrSound = loadSound("heat-vision.mp3");
 alienCrftimg = loadAnimation("sprite_0.png","sprite_1.png");
 alienlsr = loadImage("Alien laser.jpg");
 blstimg = loadImage("blast.png");
}

function setup() {
  createCanvas(1365,625);
  bg = createSprite(700,200,500,200);
  bg.addImage(bgimg);
  bg.scale = 4.3
  bg.velocityY = 4.5;

  plrShip = createSprite(500, 535);
  plrShip.addImage(plrShipimg);
  plrShip.scale = 0.6;

aliencrft = createSprite(800,100);
aliencrft.addAnimation("an",alienCrftimg);
aliencrft.scale = 0.1;
aliencrft.visible = false;

alienGrp = new Group();

}

function draw() {
  background(bgimg); 
  
  //plrShip.x = World.mouseX;

  if(keyDown("left")){
  plrShip.x -= 7.5;
  
  }

  if(keyDown("right")){
    plrShip.x += 7.5;
   
    }
  plrShip.x = plrShip.x + random(-1.3,1.3);
  
 edges = createEdgeSprites();
 plrShip.collide(edges);
 

  if(bg.y > 400){
    bg.y = bg.y = 200   
    }
    if(keyWentDown("space")){
      plrlsr = createSprite(plrShip.x-40,plrShip.y-20);
      plrlsr.addImage(plrlsrimg);
      plrlsr.scale = 0.3 ;
      plrlsr.velocityY = -17;    
     
      plrlsr2 = createSprite(plrShip.x+40,plrShip.y-20);
      plrlsr2.addImage(plrlsrimg);
      plrlsr2.scale = 0.3 ;
      plrlsr2.velocityY = -17; 
   
      plrlsr3 = createSprite(plrShip.x,plrShip.y-110);
      plrlsr3.addImage(plrlsrimg);
      plrlsr3.scale = 0.3 ;
      plrlsr3.velocityY = -17; 
      
      lsrSound.play();
     }
  

   
   
spawnAlien();

  drawSprites();

  textSize(25);
  stroke("blue");
  strokeWeight(4)
  text("Score:"+score,10,70);
}

function spawnAlien(){
  if(frameCount%100 == 0){
  aliencrft = createSprite(random(1.15));
  aliencrft.addAnimation("an",alienCrftimg);
  aliencrft.scale = 0.38;
  aliencrft.velocityX = -(7+(score/10));
  aliencrft.x = random(1350,1365);
  aliencrft.y = random(100,250);
  alienGrp.add(aliencrft); 
  aliencrft.setLifetim=80;
}
if(aliencrft.x<15){
aliencrft.velocityX = (7+(score/10));
}
}

