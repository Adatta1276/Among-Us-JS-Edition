class CameraScript {
    constructor() {}

    activateCameraProperties(x,y) {
     camera.position.x = x;
     camera.position.y = y;
    }

    setDefaultProperties() {
        camera.position.x = displayWidth/2;
        camera.position.y = displayHeight/2;
        camera.zoom = 1;
    }

    zoom(val) {
        camera.zoom = val;
    }
}

