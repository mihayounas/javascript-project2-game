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
let cardArray = [{
        name: 'cat',
        img: '/assets/images/img1.jpeg'
    },
    {
        name: 'cat',
        img: '/assets/images/img2.jpeg'
    },
    {
        name: 'koala',
        img: '/assets/images/img3.jpeg'
    },
    {
        name: 'koala',
        img: '/assets/images/img4.jpeg'
    },
    {
        name: 'unicorn',
        img: '/assets/images/img5.jpeg'
    },
    {
        name: 'unicorn',
        img: '/assets/images/img6.jpeg'
    },
    {
        name: 'cat2',
        img: '/assets/images/img7.jpeg'
    },
    {
        name: 'cat2',
        img: '/assets/images/img8.jpeg'
    },
    {
        name: 'cutewhale',
        img: '/assets/images/img9.jpeg'
    },
    {
        name: 'cutewhale',
        img: '/assets/images/img10.jpeg'
    },
    {
        name: 'cat3',
        img: '/assets/images/img11.png'
    },
    {
        name: 'cat3',
        img: '/assets/images/img12.png'
    },
    {
        name: 'elephant',
        img: '/assets/images/img13.jpeg'
    },
    {
        name: 'elephant',
        img: '/assets/images/img14jpeg.jpeg'
    },

]


const cards = document.querySelector('.cards')

function runGame() {
    for (let i = 0; i < cardArray; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', '/assets/images/front-side.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        cards.appendChild(card)
    }

}
runGame()

function checkCard() {

}

function matchingCard() {

}

function notMatchingCard() {

}

function incrementScore() {

}

function incrementLowScore() {

}