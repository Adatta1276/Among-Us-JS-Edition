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

var camFocus,stats;
let skeld_img;

function preload() {
  skeld_img = loadImage("Assets/ship_highres.png");
}


function setup() {

    //windowWidth < displayWidth
    //windowHeight < displayWidth
    createCanvas(windowWidth,windowHeight);
    camFocus = new CameraScript();
    camFocus.setDefaultProperties();
    //camFocus.zoom(3)
    

    


}



function draw() {
background(0);

    imageMode(CENTER);
    
    image(skeld_img,displayWidth/2,displayHeight/2,displayWidth,displayHeight)

}




