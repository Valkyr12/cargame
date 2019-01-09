const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.05;

class Car {
    constructor(carPic, carName) {
        this.x = 75;
        this.y = 75;
        this.speed = 0;
        this.ang = 0;
        this.myCarPic = carPic; //which picture to use
        this.name = carName;

        this.keyHeld_Gas = false;
        this.keyHeld_Reverse = false;
        this.keyHeld_TurnLeft = false;
        this.keyHeld_TurnRight = false;
    }

    setupInput(upKey,downKey, leftKey,rightKey) {
        this.controlKeyUp = upKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
        this.controlKeyRight = rightKey;
    }

    reset() {
        this.speed = 0;
        for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
            for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

                if(trackGrid[arrayIndex] === TRACK_PLAYERSTART) {
                    trackGrid[arrayIndex] = TRACK_ROAD;
                    this.ang = -Math.PI/2;
                    this.x = eachCol * TRACK_W + TRACK_W/2;
                    this.y = eachRow * TRACK_H + TRACK_H/2;
                    return;
                }
            }
        }
    }

    move() {
        this.speed *= GROUNDSPEED_DECAY_MULT;
        if(this.keyHeld_Gas) {
            this.speed += DRIVE_POWER;
        }
        if(this.keyHeld_Reverse) {
            this.speed -= REVERSE_POWER;
        }
        if(this.keyHeld_TurnLeft && Math.abs(this.speed) > DRIVE_POWER && this.speed > 0) {
            this.ang -= TURN_RATE;
        }
        if(this.keyHeld_TurnRight && Math.abs(this.speed) > DRIVE_POWER && this.speed > 0) {
            this.ang += TURN_RATE;
        }
        if(this.keyHeld_TurnLeft && Math.abs(this.speed) > DRIVE_POWER && this.speed < 0) {
            this.ang += TURN_RATE;
        }
        if(this.keyHeld_TurnRight && Math.abs(this.speed) > DRIVE_POWER && this.speed < 0) {
            this.ang -= TURN_RATE;
        }
        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;
        // carAng += 0.02;

        carTrackHandling(this);
    }

    draw() {
        drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y, this.ang);
    }

}






