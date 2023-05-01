let textarea = document.querySelector('#textarea');
let voices = document.querySelector('#voices');
let button = document.querySelector('#button');
let selectedVoice = 0;
let voicesList = [];

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
        let ut = new SpeechSynthesisUtterance(textarea.value);
        ut.voice = voicesList[selectedVoice];
        window.speechSynthesis.speak(ut);

        
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

document.getElementById('inputfile')
            .addEventListener('change', function() {
              
            var fr=new FileReader();
            fr.onload=function(){
                textarea.textContent=fr.result;
            }
              
            fr.readAsText(this.files[0]);
        })