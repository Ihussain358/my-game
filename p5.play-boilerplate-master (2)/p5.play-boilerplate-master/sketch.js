var player, npc, ground
var backgroundImage, bulletGroup, Enemy1Group, Enemy2Group

function preload(){
  player1=loadImage("images/Character 1.png")
  player2=loadImage("images/Character 2.png")
  Enemy_1=loadImage("images/Enemy 1.png")
  Enemy_2=loadImage("images/Enemy 2.png")
  bulletImage=loadImage("images/bullet 1.png")
  bullet2Image=loadImage("images/bullet 2.png")

//player2=loadAnimation("images/player.jpg","images/player2.jpg","images/player3.jpg")
backgroundImage=loadImage("backround.jpg")
}
function setup() {
  createCanvas(1200,600);

player=createSprite(600,580,10,10)
player.addAnimation("player", player1)
player.addAnimation("player2", player2)

bulletGroup=new Group();

Enemy1Group=new Group();

Enemy2Group=new Group();



ground=createSprite(600,600,1200,20)
ground.visible=false;

}

function draw() {
  background(backgroundImage);  
  player.scale=0.2

  
if(
keyDown("space")&& player.y>150){
player.velocityY=-10
}

player.velocityY=player.velocityY+0.8

if(keyDown(LEFT_ARROW)){
player.changeAnimation("player2",player2)
if (frameCount % 15 === 0) {
if(keyDown(UP_ARROW)){
  var bullet = createSprite(player.x-45,player.y-23,15,5);
  bullet.addImage(bulletImage)
  bullet.scale=0.05
  bullet.velocityX=-7
  bullet.lifetime=800
  bulletGroup.add(bullet)

}}
}

if(keyDown(RIGHT_ARROW)){
  player.changeAnimation("player",player1)
  if (frameCount % 15 === 0) {
  
  if(keyDown(UP_ARROW)){
    var bullet = createSprite(player.x+45,player.y-23,15,5);
    bullet.addImage(bullet2Image)
    bullet.scale=0.05
    bullet.velocityX=7
    bullet.lifetime=800
bulletGroup.add(bullet)
  }
  }}
player.collide(ground)

spawnEnemy();
  drawSprites();
}

function spawnEnemy(){
  if (frameCount % 100 === 0) {
   var Enemy1=createSprite(1200,300);
Enemy1.addImage(Enemy_1);
Enemy1.scale=0.3
    Enemy1.y = Math.round(random(80,520));
    Enemy1.velocityX = -3;

  }
  if (frameCount % 100 === 0) {
  var  Enemy2=createSprite(0,300);
    Enemy2.addImage(Enemy_2);
    Enemy2.scale=0.6
     Enemy2.y = Math.round(random(80,520));
     Enemy2.velocityX = 3;
  }
}