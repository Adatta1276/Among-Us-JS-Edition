
//! Commited to GitHub via VsCode @13/06/21 11 AM
var Engine = Matter.Engine,
 World= Matter.World,
 Bodies = Matter.Bodies,
 Constraint = Matter.Constraint,
 Events  = Matter.Events,
 Render = Matter.Render,
 MouseConstraint = Matter.MouseConstraint,
 Body = Matter.Body,
 Common = Matter.Common,
 Plugin = Matter.Plugin,
 Runner = Matter.Runner,
 Composite = Matter.Composite,
 Composites = Matter.Composites,
 Bounds = Matter.Bounds;

var canvas,engine,world,camFocus,stats,WalkSound;
let skeld_img;
var amaticBold,amaticRegular,jeffrey,mixigiants;

function preload() {
  //soundFormats('mp3', 'wav');
  
  
  skeld_img = loadImage("Assets/ship_highres.png");
  WalkSound = loadSound('GameMusic/SoundEffects/walkSound.mp3');
  amaticBold = loadFont('Fonts/FontFiles/amatic/Amatic-Bold.ttf');
  amaticRegular = loadFont('Fonts/FontFiles/amatic/AmaticSC-Regular.ttf');
  jeffrey = loadFont('Fonts/FontFiles/in-your-face-joffrey/In your face, joffrey!.ttf');
  mixigiants = loadFont('Fonts/FontFiles/mixigiants/MixiGiants.ttf');


  //what is interface in typescript
}


function setup() {

    //windowWidth < displayWidth
    //windowHeight < displayWidth
    canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
	world = engine.world;
    camFocus = new CameraScript();
    camFocus.setDefaultProperties();
    //camFocus.zoom(3)
    WalkSound.play(100,2,1,2,Infinity);

    


}



function draw() {
background(0);

//console.log(window.location.protocol);
Engine.update(engine);

    imageMode(CENTER);
    
    image(skeld_img,displayWidth/2,displayHeight/2,displayWidth,displayHeight)

}




