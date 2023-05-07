<style>
    /* body{
        background-color: #333;
    } */

    ul {
    counter-reset: li; 
    list-style: none; 
    padding: 0;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
    }

    ul a {
    position: relative;
    display: block;
    padding: .4em .4em .4em .8em;
    margin: .5em 0 .5em 2.5em;
    background: #D3D4DA;
    color: #444;
    text-decoration: none;
    transition: all .3s ease-out;
    }

    ul a:hover {background: #DCDDE1;}       
    ul a:before {
    content: counter(li);
    counter-increment: li;
    position: absolute;
    left: -2.5em;
    top: 50%;
    margin-top: -1em;
    background: #f9dd94;
    height: 2em;
    width: 2em;
    line-height: 2em;
    text-align: center;
    font-weight: bold;
    }

    ul a:after {
    position: absolute;
    content: "";
    border: .5em solid transparent;
    left: -1em;
    top: 50%;
    margin-top: -.5em;
    transition: all .3s ease-out;
    }

    ul a:hover:after {
    left: -.5em;
    border-left-color: #f9dd94;
    }
</style>

<!-- # Programming Playground -->

<ul>
 <li class=""><a href="https://ivanclay.github.io/playground/extract-text-from-image">Extract Text from Image</a></li>
    <li class=""><a href="https://ivanclay.github.io/playground/speech-recognition">
    Speech Recognition in JS</a></li>
    <li class=""><a href="https://ivanclay.github.io/playground/text-file-to-speech-js">Text File to Speech in JS</a></li>
    <li class=""><a href="https://ivanclay.github.io/playground/text-to-speech-js">Text to Speech in JS</a></li>
    <li class=""><a href="https://ivanclay.github.io/playground/letter-words-counter">Letter and Words Counter</a></li>
    <li class=""><a href="https://ivanclay.github.io/playground/tictactoe-game">Tic-Tac-Toe</a></li>
    <li class=""><a href="https://ivanclay.github.io/playground/memory-game">Memory Game</a></li>
    <li class=""><a href="https://ivanclay.github.io/playground/churrascometro">churrascometro</a></li>
</ul>


<!-- - [Speech Recognition in JS](https://ivanclay.github.io/playground/speech-recognition)
- [Text File to Speech in JS](https://ivanclay.github.io/playground/text-file-to-speech-js)
- [Text to Speech in JS](https://ivanclay.github.io/playground/text-to-speech-js)
- [Letter and Words Counter](https://ivanclay.github.io/playground/letter-words-counter)
- [Tic-Tac-Toe](https://ivanclay.github.io/playground/tictactoe-game)
- [Memory Game](https://ivanclay.github.io/playground/memory-game)
- [churrascometro](https://ivanclay.github.io/playground/churrascometro) -->
<!-- - [Video Controller](https://ivanclay.github.io/playground/video-controller) -->