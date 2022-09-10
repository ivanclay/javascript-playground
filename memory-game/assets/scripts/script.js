const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";
const FLIP = "flip";

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];

let cards = null;
startGame();

function startGame(){
    cards = createCardsFromTechs(techs);
    shuffleCards(cards);

    initializeBoard(cards);
}

function initializeBoard(cards){
    let gameBoard = document.getElementById("gameBoard");

    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, cardElement){
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if(face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);

    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }

    cardElement.appendChild(cardElementFace);
}

function flipCard(){
    this.classList.add(FLIP);
}

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[randomIndex],cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}

function createIdWithTech(tech) {
    return tech + parseInt(Math.random()*1000);
}

function createPairFromTech(tech){
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
    },
    {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
    }];
}

function createCardsFromTechs(techs){
    let cards = [];

    for (let tech of techs){
        cards.push(createPairFromTech(tech));
    }

    return cards.flatMap(pair => pair);
}