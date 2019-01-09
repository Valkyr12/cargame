var carPic = document.createElement('img');
var secondCarPic = document.createElement('img');
var trackPics = [];

var picsToLoad = 0;

function countLoadedImagesAndLauchIfReady() {
    picsToLoad--;
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLauchIfReady;
    imgVar.src = "images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement('img');
    beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
    var imageList = [
        {varName: carPic, theFile:"car.png"},
        {varName: secondCarPic, theFile:"car2.png"},

        {trackType: TRACK_PLAYERSTART, theFile:"track_road.png"},
        {trackType: TRACK_ROAD, theFile:"track_road.png"},
        {trackType: TRACK_WALL, theFile:"track_wall.png"},
        {trackType: TRACK_GOAL, theFile:"track_goal.png"},
        {trackType: TRACK_GRASS, theFile:"track_grass.png"},
        {trackType: TRACK_FLAG, theFile:"track_flag.png"}
    ];

    picsToLoad = imageList.length;

    for(var i=0; i<imageList.length; i++) {
        if(imageList[i].varName != undefined) {
            beginLoadingImage(imageList[i].varName, imageList[i].theFile);
        } else {
            loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
        }
    }
}