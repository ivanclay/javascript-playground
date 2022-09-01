let video = document.getElementById('video1');

function backward(){
    video.currentTime -= 15;
}

function forward(){
    video.currentTime += 15;
}

function decelerate(){
    video.playbackRate +=0.1;
}

function accelerate(){
    video.playbackRate -=0.1;
}

function play(){
    video.play();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}

function pause(){
    video.pause();
}
