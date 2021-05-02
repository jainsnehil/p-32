const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,bgImg 

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(bgImg){
  background(bgImg)


    Engine.update(engine);
    }
    // write code to display time in correct format here


}

async function getBackgroundImg(){

var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJson=await response.json();
console.log(responseJson)
var dt=responseJson.datetime
var slc=dt.slice(11,13)
 if(slc>=7&&slc<=8){
     bg="sunrise1.png"
 }
 if(slc>=9&&slc<=10){
     bg="sunrise2.png"
 }
 if(slc>=10&&slc<=12){
     bg="sunrise3.png"
 }
 if(slc>=12&&slc<=13){
     bg="sunrise4.png"
 }
 if(slc>=14 && slc<=15){
     bg="sunrise5.png"
 }
 if(slc>=16 && slc<=17){
    bg="sunrise6.png"
 }else{
    bg="sunset11.png"
 }
 
     
    
 bgImg=loadImage(bg)
}
