// Wait for Dom to load before running the game
//Get buttons and add event listeners to them




// Create our html elements Crads with classes and ids

function createCard(object) {
    let li = document.createElement('li');
    li.classList.add('flip-card');


    let divInner = document.createElement('div');
    divInner.classList.add('flip-card-inner');


    let divFront = document.createElement('div');
    divFront.classList.add('flip-card-front');

    let imgFront = document.createElement('img');
    imgFront.setAttribute('src', '/assets/images/front-side.png')
    imgFront.setAttribute('data-name', object.name)
    divFront.appendChild(imgFront);


    let divBack = document.createElement('div');
    divBack.classList.add('flip-card-back');

    let imgBack = document.createElement('img');
    imgBack.setAttribute('src', object.img)

    divBack.appendChild(imgBack);

    divInner.appendChild(divFront);
    divInner.appendChild(divBack);
    li.appendChild(divInner);

    document.getElementById('cards-container').appendChild(li);
}

// Create an array of cards with image sources

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
        name: 'elephant',
        img: '/assets/images/img9.jpeg'
    },
    {
        name: 'elephant',
        img: '/assets/images/img10.jpeg'
    },
    {
        name: 'kitty',
        img: '/assets/images/img11.png'
    },
    {
        name: 'kitty',
        img: '/assets/images/img12.png'
    },
]
//Declare variables
let option1 = '';
let option2 = '';
let moves = []

// Sort the array in that way that it will always be randon for the player
cardArray.sort(() => 0.5 - Math.random());

// Create runGame function so we can create the game board cards

function runGame() {
    for (i = 0; i < cardArray.length; i++) {
        createCard(cardArray[i])


    }
}
runGame()
let time = 0;
setInterval(() => {
    time++;
    document.getElementById('time').innerHTML = time + 's'
}, 1000)

// Create the click event to make the cards flip on click

const cardsCollection = document.getElementsByClassName('flip-card')
const cardsArray = [...cardsCollection]
cardsArray.forEach((card) => {
    card.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.style.transform = 'rotateY(180deg)'
        let selectedOptions = event.target.getAttribute('data-name')
        moves++
        if (option1 === '') {
            option1 = selectedOptions;
        } else if (option1 !== '') {
            option2 = selectedOptions;
        }
        if (option1 !== '' && option2 !== '') {
            if (option1 === option2) {

                alert('You Found a Match')
            } else {

                alert('Sorry Try Again!')
                option1 = '';
                option2 = '';

            }
        }
    })
})