let audio = document.getElementById('audio1');

function backward(){
    audio.currentTime -= 15;
}

function forward(){
    audio.currentTime += 15;
}

function decelerate(){
    audio.playbackRate -=0.1;
}

function accelerate(){
    audio.playbackRate +=0.1;
}

function play(){
    audio.play();
}

function stop(){
    audio.pause();
    audio.currentTime = 0;
}

function pause(){
    audio.pause();
}
