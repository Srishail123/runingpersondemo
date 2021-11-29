var rock, track, road
function preload(){
runnerImg=loadImage("runner.png");
rockImg=loadImage("runner.png");
roadImg=loadImage("road.jpeg");
}

function setup() {
 createCanvas(400,400);

 road=createSprite(200,200,400,400);
 road.addImage(roadImg);
 road.velocityX = 4;
road.scale=1.5

runner=createSprite(20,350,10,10);
runner.addImage(runnerImg);
runner.scale=0.08
}

function draw() {
 drawSprites();

 if(road.x > 297 ){
    road.x = width/2;
  }
}