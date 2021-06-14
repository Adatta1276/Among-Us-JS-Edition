class Game {
    constructor() {}

    //add multiplayer
    showLoginScreen() {
         stroke("#19cc18")
         strokeWeight(3.2);
         fill(0);
         this.rect = rect(0,0,200,23);
         this.nameInput = createInput("");
         this.name = this.nameInput.value;
         console.log(this.name);
         this.playerList = [this.name];
         this.playerListOBJ = Object.keys(this.playerList);
         alert("playerlistobj = "+this.playerListOBJ);
         this.characterLimit = 10;
         this.joinPublicServer = loadImage("");
         this.joinPrivateServer = loadImage("");
         this.hostOwnServer = loadImage("");
         this.goBackButton = rect(0,0,70,14);
         this.hostOwnServerText = createElement('Create Game');
         this.joinPublicServer = createElement('Find Game');
         this.joinPublicServer = createElement('Enter Code');
         //try to create joinPrivateServerArrow using lines, and should be filled with green while being touched/clicked
         this.joinPrivateServerArrow = loadImage("");
         this.authorInfoButton = loadImage("");
         this.locationFindServerButton = loadImage("");
         this.gameVersionext = createElement('v2021.1.0b')//indicates 2021, version 1.0, b for BETA
        
         
    }
}