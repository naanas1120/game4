var gun,gunImage
var gun1,gunImage1
var fire
var zoom
var violet,indigo,blue,green,yellow,orange,red
var shooter
var colour
var car1,car1Image
var backgroundImage
var fire1,fire1Image
var firePressed=false
function preload(){
car1Image=loadImage("images/car1.png")
bluecarImage=loadImage("images/bluecar.png")
redcarImage=loadImage("images/redcar.png")
violetcarImage=loadImage("images/violetcar.png")
indigocarImage=loadImage("images/indigocar.png")
greencarImage=loadImage("images/greencar.png")
yellowcarImage=loadImage("images/yellowcar.png")
orangecarImage=loadImage("images/orangecar.png")
gunImage1=loadImage("images/gun.png")

fire1Image=loadImage("images/fire.png")

gunImage=loadAnimation("images/1st part.png","images/2nd part.png"
,"images/3rd part.png","images/4th part.png")

backgroundImage=loadImage("images/background.jpg")
}
function setup() {
  createCanvas(1200,800);

gun=createSprite(400, 650, 5, 5);
gun.scale=0.4

gun1=createSprite(400,650,10,10)
gun1.addImage(gunImage1)
gun1.scale=0.4

  violet=createSprite(380, 150, 20, 20);
  violet.shapeColor="violet"

  indigo=createSprite(420, 150, 20, 20);
  indigo.shapeColor="indigo"

  blue=createSprite(460, 150, 20, 20);
  blue.shapeColor="blue"

  green=createSprite(500, 150, 20, 20);
  green.shapeColor="green"

  yellow=createSprite(400, 200, 20, 20);
  yellow.shapeColor="yellow"

  orange=createSprite(440, 200, 20, 20);
  orange.shapeColor="orange"

  red=createSprite(480, 200, 20, 20);
  red.shapeColor="red"

  car1=createSprite(400,350, 20, 20)
  car1.addImage(car1Image)
  car1.scale=0.4

  shooter=createSprite(380,460,5,5)

zoom=createButton('zoom')
zoom.position(250,580,50,50)
zoom.style('border-radius','50%')
zoom.style('height','5%')
zoom.style('width','3%')
zoom.style('background-image','fire1Image')

fire=createButton('fire')
fire.position(500,580,50,50)
fire.style('border-radius','50%')
fire.style('height','5%')
fire.style('width','3%')
}

function draw() {
  background(backgroundImage);  
  
  zoom.mousePressed(()=>{
    firePressed=true
  })
  
  if(firePressed===true){
shooter.debug=true
shooter.x=mouseX
shooter.y=mouseY
//shooter.x=gun.x
//shooter.y=gun.y-150
  }

  drawSprites();
}
function mouseClicked(){
//picking the colours
if(shooter.isTouching(violet)){
  gun.addAnimation=("gun",gunImage)
  colour="violet"
}
else if(shooter.isTouching(blue)){
  colour="blue"
}else if(shooter.isTouching(red)){
  colour="red"
}
else if(shooter.isTouching(indigo)){
  colour="indigo"
}
else if(shooter.isTouching(green)){
  colour="green"
}
else if(shooter.isTouching(yellow)){
  colour="yellow"
}
else if(shooter.isTouching(orange)){
  colour="orange"
}

if(shooter.isTouching(indigo)){}
if(shooter.isTouching(violet)){}
if(shooter.isTouching(blue)){}
if(shooter.isTouching(green)){}
if(shooter.isTouching(yellow)){}
if(shooter.isTouching(red)){}
if(shooter.isTouching(orange)){}

// painting the car
if(shooter.isTouching(car1)){
  gun1.visible=false
  gun.addAnimation("gun",gunImage)
    if(colour==="blue"){
    car1.addImage(bluecarImage)
    }

    else if(colour==="red"){
      car1.addImage(redcarImage)
    }
    else if(colour==="violet"){
      car1.addImage(violetcarImage)
    }

else if(colour==="indigo"){
  car1.addImage(indigocarImage)
}
else if(colour==="green"){
  car1.addImage(greencarImage)
}
else if(colour==="yellow"){
  car1.addImage(yellowcarImage)
}
else if(colour==="orange"){
  car1.addImage(orangecarImage)
}

}
}