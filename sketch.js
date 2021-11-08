var bg,bgimg

function preload(){
 getTime()
}


function setup() {
  createCanvas(1366,657);
  
}

function draw() {
  if(bgimg)
  background(bgimg); 
  drawSprites();
}


async function getTime(){

  var responce = await fetch('https://worldtimeapi.org/api/timezone/Asia/kolkata')
  var jsondata = await responce.json()
  var datetime  = jsondata. datetime

  var hour =datetime.slice(11,13)
  console.log(hour)

  if (hour> 6 && hour<19){
    bg ='day.3.jpg'
  }
else {
  bg = 'night.jpg'
}
bgimg = loadImage(bg)

}