class Crewmate {
    constructor(x,y,w,h,color,stroke,weight) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.stroke = stroke;
        this.weight = weight; // = strokeWeight
        this.spawnAnimation = loadAnimation("");
        this.spawnLocation = loadImage("");
        this.emergencyMeetingTableLocation = 0;
        this.body = loadAnimation("");
        this.ghost = loadAnimation("");
        this.randomAnimation = Math.round(random(0,1));
        this.animation = null;
        this.walkSound = loadSound("walkSound.mp3");
        this.reportButton = loadImage("");
        this.useButton = loadImage("");
        this.hat = loadImage("");
        this.costume = loadImage("");
        this.pet = loadImage("");
        this.randomColor = Math.round(random(1,10));
    }

    animationDoStuff() {
        if(this.randomAnimation===0) {
            this.animation = loadImage("Assets/player_1.png");
            animation(image(this.animation, this.x, this.y, this.w, this.h, 44, 60, 86, 120), image(this.animation, this.x, this.y, this.w, this.h, 140, 60, 86, 120),image(this.animation, this.x, this.y, this.w, this.h, 236, 60, 86, 120),image(this.animation, this.x, this.y, this.w, this.h, 232, 60, 86, 120))
        }

        else {
            this.animation = loadImage("Assets/player_2.png");
        }
    }


    canDoTasks(bool) {
     if(bool === true) {

     }

     else {
        return false;
     }


    }
}

class Imposter{
    constructor(x,y,w,h,color,stroke,weight) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.roleSound = loadSound("");
        this.color = color;
        this.stroke = stroke;
        this.weight = weight;
        this.spawnAnimation = loadAnimation("");
        this.spawnLocation = loadImage("");
        this.emergencyMeetingTableLocation = 0;
        this.body = loadAnimation("");
        this.ghost = loadAnimation("");
        this.walkAnimation = loadAnimation("");
        this.walkSound = loadSound("walkSound.mp3");
        this.killSound = loadSound("kill.mp3")
        this.reportButton = loadImage("");
        this.useButton = loadImage("");
        this.killButton = loadImage("");
        this.sabotButton = loadImage("");
        this.hat = loadImage("");
        this.costume = loadImage("");
        this.pet = loadImage("");
        this.randomColor = Math.round(random(1,10));
    }
        
    animationDoStuff() {
        this.animation = loadImage("Assets/player_1.png");
        animation(image(this.animation, this.x, this.y, this.w, this.h, 44, 60, 86, 120), image(this.animation, this.x, this.y, this.w, this.h, 140, 60, 86, 120),image(this.animation, this.x, this.y, this.w, this.h, 236, 60, 86, 120),image(this.animation, this.x, this.y, this.w, this.h, 232, 60, 86, 120))
    }


    canDoTasks(bool) {
     if(bool === true) {

     }

     else {
        return false;
     }


    }
}
    
