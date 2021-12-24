var back, backImg
var spaceship, shipImg
var b1, b2

function preload(){
  backImg=loadImage("outer-space.png")
  shipImg=loadImage("ship.png")

}


function setup() {
  createCanvas(1200,800);

  back=createSprite(600,400,10,10)
  back.addImage(backImg)
  back.velocityY=2
  back.scale=1.5

  b1=createSprite(100,400,10,1000)
  b1.visible=false

  b2=createSprite(1100,400,10,1000)
  b2.visible=false

  spaceship=createSprite(600,600,20,20)
  spaceship.addImage(shipImg)
  spaceship.scale=0.2
  
}

function draw() {
  background("red");

  if(back.y>700){
    back.y=back.height/10
  }

  if(keyDown("right")){
    spaceship.x=spaceship.x+4
  }

  if(keyDown("left")){
    spaceship.x=spaceship.x-4
  }
  spaceship.collide(b1)
  spaceship.collide(b2)

  drawSprites();
}
// how to make the border?