var path
var path_image
var jake
var jake_image
var rightwall
var leftwall
function preload(){
  //pre-load images
  path_image=loadImage("path.png")
 jake_image=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(path_image);
  path.y=path.height/2
  path.velocityY=4;
  path.scale=1.2;

  jake=createSprite(200,200)
  jake.addAnimation("running",jake_image)
  jake.velocityY=0
  jake.scale=0.05

  rightwall=createSprite(35,50,30,800)
  rightwall.visible=false
  
  leftwall=createSprite(365,50,20,800)
  leftwall.visible=false
 
}

function draw() {
  background(0);
  if(path.y>400){
   path.y= height / 2
  }

  if(keyDown("RIGHT_ARROW")){
    jake.velocityX=2
  }

  if(keyWentUp("RIGHT_ARROW")){
    jake.velocityX=0
  }

  if(keyDown("LEFT_ARROW")){
    jake.velocityX=-2
  }

  if(keyWentUp("LEFT_ARROW")){
    jake.velocityX=0
  }

  jake.collide(rightwall)
  
  jake.collide(leftwall)

  drawSprites()

}
