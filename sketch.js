var dog,happyDog,database;
var foodS,foodStock;

function preload()
{
  dogImage=loadImage("dogImg.png")
  happydogImage=loadImage("dogImg1.png")

}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(200,300,20,20)
  dog.addImage(dogImage)
  dog.scale=0.3;

  foodStock=database.ref('Food');
  foodStock.on("value,readStock")

}


function draw() {  
background(46,139,87)

if(KeyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(doghappy)

}
  drawSprites();
  Text("Press Up arrow Key To feed Drago milk!")
  textsize(10)
  fill(skyblue)
stroke(black)
}

function readStock(data){
foodS=data.val();

}

function writeStock(x){
database.ref('/').updata({
  Food:x
})

}