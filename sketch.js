var rajan, npcs, obstacle1, obstaclebstacle3, obstacle4;
var bg, bgImg;
var InvisibleGround,InvisibleGround2;
var gameMenu,startButton,startImg,aboutButton,aboutImg,controlbutton,controlImg,controlpage,controlpage2,holeImg;
var backbutton1, backbutton1Img;
var PLAY = 1;
var END = 0;
var gameState = END;
var miles = 0;
var gametheme;
function preload(){

  bgImg = loadImage("Bg-cafe.jpg")
  gameMenu = loadImage("menu.png")
  startImg = loadImage("startbutton.png");
  aboutImg = loadImage("aboutbutton.png");
   controlImg = loadImage("controls.png");
   holeImg = loadImage("hole.png");
  controlpage = loadImage("CONTROL.png");
  backbutton1Img = loadImage("Back.png");
  gametheme = loadSound("Atmosphere.mp3")
}

function setup() { 
  createCanvas(700, 400); 
     
      bg = createSprite(720,200,20,20);
  bg.addImage("bg",bgImg);
 bg.visible = false;
    rajan = createSprite(150,325,20,40);
  rajan.visible = false;
  InvisibleGround = createSprite(350,395,700,10)
  InvisibleGround.visible = false;
  InvisibleGround2 = createSprite(350,280,700,10)
    InvisibleGround2.visible = false;
  startbutton = createSprite(358,200,100,50);
  startbutton.addImage("start",startImg);
  startbutton.scale = 0.85;
   startbutton.setCollider("rectangle",-9,-11,300,78);
  
  aboutbutton = createSprite(352,275,100,10);
  aboutbutton.addImage("about",aboutImg);
  aboutbutton.scale = 0.8

  controlbutton = createSprite(340,365,100,50);
  controlbutton.addImage("controls",controlImg);
  controlbutton.scale = 0.17
  controlbutton.setCollider("rectangle",80,-65,1330,410);
  
  controlpage2 = createSprite(350,200);
  controlpage2.addImage("control",controlpage);
  
  controlpage2.scale = 0.58;
  controlpage2.visible = false;
  
  backbutton1 = createSprite(340,370,20,20);
  backbutton1.addImage("back",backbutton1Img)
  backbutton1.scale = 0.25
  backbutton1.visible = false;
  backbutton1.setCollider("rectangle",38,20,560,149);
   gametheme.loop();
}

  
function draw() {
 background("black");
  
  miles = miles + 0.01
 
  if(gameState === END){
    background(gameMenu);
      
  }

  if(keyDown("s")){
    gameState = PLAY;
  }
  if(mousePressedOver(startbutton) && gameState === END && controlpage2.visible === false){
    gameState = PLAY;
  }
  if(mousePressedOver(controlbutton) && gameState === END){
  controlpage2.visible = true;
    backbutton1.visible = true;
  }
   if(mousePressedOver(backbutton1) && gameState === END){
  controlpage2.visible = false;
    backbutton1.visible = false;
  }

  if(gameState === PLAY){ 
     
    startbutton.visible = false;
    aboutbutton.visible = false;
    controlbutton.visible = false;
    bg.visible = true;
    miles=miles+Math.round(getFrameRate()/65)
    text("Distance covered =" + miles,400,200);
    spawnObstacle()
   
    rajan.visible = true;
    bg.velocityX= -(4 + 2*miles/10);
    
   
    if(keyDown("UP_ARROW")){
      rajan.y = rajan.y - 3;
    }
     if(keyDown("DOWN_ARROW")){
      rajan.y = rajan.y + 3;
    }
    if(bg.x<0){
    bg.x  =  720;
  }
    
  }
  rajan.collide(InvisibleGround);
 
  rajan.collide(InvisibleGround2);
   
  drawSprites();
}
function spawnObstacle(){ 
   
  if(frameCount%75===0){
    obstacle1 = createSprite(800,365,20,20);
    obstacle1.y = Math.round(random(320,365));
    obstacle1.addImage("hole",holeImg)
    obstacle1.scale = 0.3
    obstacle1.velocityX = bg.velocityX;
    obstacle1.depth = rajan.depth
    rajan.depth = rajan.depth+1
    obstacle1.setCollider("rectangle",35,34,493,90);
    obstacle1.lifetime = 210;
  }
}
