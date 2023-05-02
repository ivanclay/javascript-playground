const input = document.querySelector('#input');
const characterCounter = document.querySelector('.characterCounter');
const wordCounter = document.querySelector('.wordCounter');
//const toggleButton = document.querySelector('#toggle');

const charMode = 'characters';
const wordMode = 'words';
let useMode = charMode;

// toggleButton.addEventListener('click', () => {
//     if(useMode === charMode){
//         useMode = wordMode;
//         toggleButton.textContent = "Characters Count";
//     }else{
//         useMode = charMode;
//         toggleButton.textContent = "Words Count";
//     }
// });

input.addEventListener('input', () => {
    
    charactersCounter();
    wordsCounter();
   
    // if(useMode === charMode){
    //     count = input.value.length;

    //     counter.textContent = `${count} character(s)`
    // }else{
    //     const words = input.value.trim().split(/\s+/);
    //     count = words.length;
    //     counter.textContent = `${count} word(s)`
    // }
});

charactersCounter = () => {
    let countChars = 0;
    countChars = input.value.length;
    characterCounter.textContent = `${countChars} character(s)`
}

wordsCounter = () => {
    let countWords = 0;
    const words = input.value.trim().split(/\s+/);
    countWords = words.length;
    wordCounter.textContent = `${countWords} word(s)`
}