let textarea = document.querySelector('#textarea');
let button = document.querySelector('#button');
let clear = document.querySelector('#clear');
let listening = false;

const recognition = createRecognition();

clear.addEventListener('click', e => {
    textarea.innerHTML = '';
});

button.addEventListener('click', e => {
   
    if(!recognition) return;

    listening ? recognition.stop() : recognition.start();
    button.innerHTML = listening ? 'Click and Speak' : 'Click and Read';
});

function createRecognition(){
    const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    const recognition = speechRecognition !== undefined ? new speechRecognition() : null;

    if(!recognition){
        textarea.innerHTML = "Speech recognition not found!";
        return null;
    }

    recognition.lang = "pt_BR";
    recognition.onstart = () => listening = true;
    recognition.onend = () => listening = false;
    recognition.onerror = e => console.log('error', e);
    recognition.onresult = e => textarea.innerHTML = e.results[0][0].transcript;

    return recognition;
}