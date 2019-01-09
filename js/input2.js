const KEY_LEFT_ARROW = 'ArrowLeft';
const KEY_RIGHT_ARROW = 'ArrowRight';
const KEY_UP_ARROW = 'ArrowUp';
const KEY_DOWN_ARROW = 'ArrowDown';

const KEY_W = 'w';
const KEY_A = 'a';
const KEY_S = 's';
const KEY_D = 'd';

function setupInput() {
    // canvas.addEventListener('mousemove', updateMousePos);

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    greenCar.setupInput(KEY_UP_ARROW,KEY_DOWN_ARROW, KEY_LEFT_ARROW,KEY_RIGHT_ARROW);
    redCar.setupInput(KEY_W,KEY_S, KEY_A,KEY_D);
}

function keySet(keyEvent, whichCar, setTo) {
    if(keyEvent.key === whichCar.controlKeyLeft) {
        whichCar.keyHeld_TurnLeft = setTo;
    }
    if(keyEvent.key === whichCar.controlKeyRight) {
        whichCar.keyHeld_TurnRight = setTo;
    }
    if(keyEvent.key === whichCar.controlKeyUp) {
        whichCar.keyHeld_Gas = setTo;
    }
    if(keyEvent.key === whichCar.controlKeyDown) {
        whichCar.keyHeld_Reverse = setTo;
    }
}

function keyPressed(event) {
     //console.log(event.key);
    keySet(event, greenCar, true);
    keySet(event, redCar, true);
}

function keyReleased(event) {
    // console.log(event.key);
    keySet(event, greenCar, false);
    keySet(event, redCar, false);
}
