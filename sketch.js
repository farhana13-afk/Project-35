//Create variables here
var dog, happyDog, database, foodS;
function preload()
{
  //load images here
  dog1 = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);
  dog = createSprite(250,250,10,20);
  dog.addImage(dog1);
  dog.scale=0.3;
  var foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
   background(rgb(46,139,87));

   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogHappy);
     foodS = foodS +1;
   } else if (keyWentUp(UP_ARROW)) {
     dog.addImage(dog1);
   }

  drawSprites();
  //add styles here
   textSize(20);
   fill ("pink");
   stroke =("black");
   text("Food:" + foodS, 350, 60);
   text("Note: Press UP ARROW Key to feed the pupppy milk!",10,440);
  
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    food:x
  })
}



