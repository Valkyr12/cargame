var canvas, canvasContext;

var greenCar = new Car(carPic, 'Green car');
var redCar = new Car(secondCarPic, 'Red car');

    window.onload = function () {
        canvas = document.getElementById('game');
        canvasContext = canvas.getContext('2d');

        colorRect(0,0, canvas.width,canvas.height, 'red');
        colorText("LOADING GAME", canvas.width/2,canvas.height/2, 'black');
        loadImages();
    };

    function imageLoadingDoneSoStartGame() {
        var framesPerSecond = 30;
        setInterval(updateAll, 1000/framesPerSecond);
        setupInput();

        loadLevel(levelOne);
    }
    
    function loadLevel(whichLevel) {
        trackGrid = whichLevel.slice();
        greenCar.reset();
        redCar.reset();
    }

    function updateAll() {
        moveAll();
        drawAll();
    }

    function moveAll() {
        greenCar.move();
        redCar.move();
    }

    function drawAll() {
        drawTracks();
        greenCar.draw();
        redCar.draw();
    }