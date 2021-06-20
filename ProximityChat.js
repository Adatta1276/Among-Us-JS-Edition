class ProximityChat {

    /*
    
    HOW TO MASK IMAGE INSIDE SHAPE : 
    
    let circleMask;
let myImage;

function setup() {
  createCanvas(400, 400);

  circleMask = createGraphics(128, 128);

  myImage = loadImage('https://raw.githubusercontent.com/Adatta1276/Plucking-Mangoes/main/backgroundImg.png');
}

function draw() {
  background(255);

  circleMask.fill('rgba(0, 0, 0, 1)');

  circleMask.circle(64, 64, 128);

  myImage.mask(circleMask);

  image(myImage, 200 - 64, 200 - 64, 128, 128);
} */


    constructor(distance,captureX,captureY,captureWidth,captureHeight,gWidth,gHeight) {
        this.distance = distance;
        this.captureX = captureX;
        this.captureY = captureY;
        this.captureWidth = captureWidth;
        this.captureHeight = captureHeight;
        this.gWidth = gWidth;
        this.gHeight = gHeight;
        
        this.testCrewMate = new Crewmate();
        this.volSlider = createSlider(0, 100, 50/*, [step]*/);
        this.testImp = new Imposter();
        this.mic = new p5.AudioIn();
        this.lowFilter = new p5.LowPass();
        this.highFilter = new p5.HighPass();
        this.mediumFilter = new p5.BandPass();
        this.capture = createCapture(VIDEO);
        this.volLevel = this.mic.getLevel();
        this.volLevelRounded = Math.round(this.volLevel);
        this.audioOsc = new p5.Oscillator();
        this.visualizer = new p5.Amplitude();
        this.imageGraphics = createGraphics(gWidth, gHeight);//should default to 300,300 respectively 
        this.analyserLevel = this.visualizer.getLevel();
         /* ANOTHER WAY TO PROCESS SOUND VIA A SOUND FILTER
         
         filter.process(noise);*/

        this.chatMenu = null; /*create menu later*/ ;
    }

    enableDefaultStuff() {
        this.mic.start();
        this.mic.connect();
        this.visualizer.setInput(this.mic.connect());
        
    }

    enableCustomStuff(filter) {


        /* lowPass is preferred,
          highPass is OK,
          and BandPass isn't OK */
          
        if(filter === "low") {
            this.mic.start();
            this.mic.connect(this.lowFilter);
        }

        else if(filter === "medium") {
            this.mic.start();
            this.mic.connect(this.mediumFilter);
            
        }

        else if(filter === "high") {
            this.mic.start();
            this.mic.connect(this.highFilter);
        }

        if(this.volLevel === 0) {
            line(0,0,100,0);
            console.log(line.x,line.y);
        }

        else if(this.volLevel > 0  && this.volLevel <= 1) {
//add talking animation (-/\-/\-)
        }
        
    }

    startChat() {}

    stopChat() {}

    hideCapture() {
        this.capture.hide();
    }
}