const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
     background(backgroundImg)
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/kolkata")
    //change the data in JSON format
    var responseJSON = await response.JSON();
    // write code slice the datetime
    var daytime=responseJSON.daytime;
    var hour=daytime.slice(11,13);
    console.log(hour)

    // add conditions to change the background images from sunrise to sunset
if(hour>=4 && hour<=6){
bg="sprites/sunrise1.png"

}else if(hour>=6 && hour<=8){

bg="sprites/sunrise2.png"

}else if(hour>=8 && hour<=10){

bg="sprites/sunrise3.png"


}else if(hour>=10 && hour<=12){

bg="sprites/sunrise4.png"

}else if(hour>=12 && hour<=14){

bg="sprites/sunrise5.png"

}else if(hour>=14 && hour<=16){

bg="sprites/sunrise6.png"

}else if(hour>=16 && hour<=18){

bg="sprites/sunrise7.png"

}else if(hour>=18 && hour<=20 ){

bg="sprites/sunrise8.png"

}else if(hour>=20 && hour<=22){

bg="sprites/sunrise9.png"

}else if(hour>=22 && hour==0){

    bg="sprites/sunrise10.png"
    
}else if(hour==0 && hour<=03){

    bg="sprites/sunrise11.png"
    
    }else{

    bg="sprites/sunrise12.png"

    }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)
}
