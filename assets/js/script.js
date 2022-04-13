// Wait for Dom to load before running the game
//Get buttons and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked submit!');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`)
            }
        })
    }
})


function createCard(imgSrc) {
    let li = document.createElement('li');
    li.classList.add('flip-card');

    let divInner = document.createElement('div');
    divInner.classList.add('flip-card-inner');


    let divFront = document.createElement('div');
    divFront.classList.add('flip-card-front');

    let imgFront = document.createElement('img');
    imgFront.setAttribute('src', '/assets/images/front-side.png')
    divFront.appendChild(imgFront);

    let divBack = document.createElement('div');
    divBack.classList.add('flip-card-back');

    let imgBack = document.createElement('img');
    imgBack.setAttribute('src', imgSrc)
    divBack.appendChild(imgBack);

    divInner.appendChild(divFront);
    divInner.appendChild(divBack);
    li.appendChild(divInner);

    document.getElementById('cards-container').appendChild(li);
}
let cardArray = ['/assets/images/img1.jpeg', '/assets/images/img2.jpeg', '/assets/images/img3.jpeg', '/assets/images/img4.jpeg', '/assets/images/img5.jpeg', '/assets/images/img6.jpeg', '/assets/images/img7.jpeg', '/assets/images/img8.jpeg', '/assets/images/img9.jpeg', '/assets/images/img10.jpeg ', '/assets/images/img11.png', '/assets/images/img12.png', ]

cardArray.sort(() => 0.5 - Math.random());
var chosenCards = []


// Create game board

function runGame() {
    for (i = 0; i < cardArray.length; i++) {
        createCard(cardArray[i])

    }
}
runGame()

const cardsCollection = document.getElementsByClassName('flip-card')
const cardsArray = [...cardsCollection]
cardsArray.forEach((card) => {
    card.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.style.transform = 'rotateY(180deg)'
        clickedCard(event)
    })
})

//Create flipCard function