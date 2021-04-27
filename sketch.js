//Create variables here
var dog, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg.png")
}

function setup() {
  database = firebase.database()
	createCanvas(1000, 400);
  dog = createSprite(800, 200, 150, 150);
  dog.addImage("happyDog")
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}


