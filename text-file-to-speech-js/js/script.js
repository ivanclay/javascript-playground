let textarea = document.querySelector('#textarea');
let voices = document.querySelector('#voices');
let button = document.querySelector('#button');
let selectedVoice = 0;
let voicesList = [];

let inputfile = document.querySelector('#inputfile');
let checkSpeakFromFile = document.querySelector('#speakFromFile');
let checkLoadTextAreaAndSpeak = document.querySelector('#loadTextAreaAndSpeak');

speechText = (text) => {
    let ut = new SpeechSynthesisUtterance(text);
    ut.voice = voicesList[selectedVoice];
    window.speechSynthesis.speak(ut);
    inputfile.value = '';
}

window.speechSynthesis.addEventListener('voiceschanged', () => {
    voicesList = window.speechSynthesis.getVoices();
        
    for (let i in voicesList) {
        let optionEl = document.createElement('option');
        optionEl.setAttribute('value', i);
        optionEl.innerText = voicesList[i].name;

        voices.appendChild(optionEl);
    }
});


button.addEventListener('click', () => {
    if(textarea.value !== ''){
        speechText(textarea.value);        
    }
});

voices.addEventListener('change', () => {
    selectedVoice = parseInt(voices.value);
});

function updateStatus(){
    if(window.speechSynthesis.speaking){
        voices.setAttribute('disabled', 'disabled');
        button.setAttribute('disabled', 'disabled');
    }else{
        voices.removeAttribute('disabled');
        button.removeAttribute('disabled');
    }
}

setInterval(updateStatus,1000);

inputfile.addEventListener('change', function() {
    var fr = new FileReader();
    fr.onload = function(){
        
        if(checkSpeakFromFile.checked){
            speechText(fr.result);
        }else{
            textarea.textContent = fr.result;
        }
    }
        
    fr.readAsText(this.files[0]);
})