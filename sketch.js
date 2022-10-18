var sea
var ship
var shipAnimation

function preload(){

shipAnimation = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png")
seaMoving = loadImage("sea.png")

}

function setup(){
  createCanvas(1500,800);

ship = createSprite(200,400,20,20)
sea = createSprite(1000,400,100,100)
sea.addImage("animation", seaMoving)
sea.scale = 0.5
ship.addAnimation("moving", shipAnimation)
ship.scale = 0.3

sea.depth = 1
ship.depth = 2

sea.velocityX = -9

}

function draw() {
  background("white");
    
  if(sea.x < 350){
    sea.x = 1030
  }
  
  

  drawSprites();

 
}
