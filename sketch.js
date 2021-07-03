
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
var joinedSeconds = 0;
var userName;

//var chest = "asdhg!@#12#$.?";

function preload() {
  //soundFormats('mp3', 'wav');
  
  
  // ! KNOWN ISSUES : 1) Map takes time to render due to high res.
  // ! KNOWN ISSUES : 2) For a 1080p display on Google Chrome, browser zoom level needs to be 90% for map to show properly

  
  skeld_img = loadImage("Assets/shipCool.png");
  WalkSound = loadSound('GameMusic/SoundEffects/walkSound.mp3');
  amaticBold = loadFont('Fonts/FontFiles/amatic/Amatic-Bold.ttf');
  amaticRegular = loadFont('Fonts/FontFiles/amatic/AmaticSC-Regular.ttf');
  jeffrey = loadFont('Fonts/FontFiles/in-your-face-joffrey/In your face, joffrey!.ttf');
  mixigiants = loadFont('Fonts/FontFiles/mixgiants/MixGiants.ttf');
  

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
    //! Fix walkSound not playing
    WalkSound.play(100,2,1,2,Infinity);

   // alert(chest);

   //customize sweetalert properties for this one separately using CSS
   let timerInterval;
   
/*Swal.fire({
  title: 'Welcome to server : '+window.location.hostname,
  html: 'This popup will close in <b></b> seconds',
  timer: 5000,
  heightAuto:false,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getHtmlContainer()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Math.round(Swal.getTimerLeft()/1000);
        }
      }
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
})*/

joinedSeconds+=3;

if(joinedSeconds>=3) {

  Swal.fire({
    title: "Your Name",
    text: "Write something meaningful :-)",
    input: 'text',
    confirmButtonText: 'Save',
  showLoaderOnConfirm: true,
    showCancelButton: true        
}).then((result) => {
    if (result.value) {
      userName = result.value;
      alert(userName);
    }
});
}

console.log(joinedSeconds)

showNameBox();

//rect(width / 2-30, height / 2-30, 50, 50);


}



function draw() {
background(255);

//console.log(window.location.protocol);
Engine.update(engine);

    imageMode(CENTER);
    
    image(skeld_img,displayWidth/2,displayHeight/2+20,displayWidth,displayHeight)

}

function doubleClicked() {
  camera.position.x = mouseX-110;
  camera.position.y = mouseY;
  
  camera.zoom = 4;
}

function mouseClicked() {
  camFocus.setDefaultProperties();
}

function mouseDragged() {
  camera.zoom = 4;
  camera.position.x = mouseX-110;
  camera.position.y = mouseY;
}

function showNameBox() {
 /* drawingContext.shadowOffsetX = 1;
drawingContext.shadowOffsetY = 1;
drawingContext.shadowBlur = 10;
drawingContext.shadowColor = '#0073ff';*/
drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
rect(width/2,height/2,200,35);
textSize(30);
text(userName,width/4,height/4);
}

function showCursorPosForDevsOnly() {
   textSize(20);
   fill("#ff0000")
   text("x : "+mouseX,)
}





