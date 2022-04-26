// Wait for Dom to load before running the game
document.addEventListener("DOMContentLoaded", function() {
    // Create pop up modal function
    var btn = document.getElementById("myBtn");
    btn.onclick = function() {
        modal.style.display = "block";

    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "block";

        }
    }
})
var modal = document.getElementById("myModal");
let time = 0;
let interval;

// Create our html elements Cards with classes and ids 

function createCard(object) {
    let li = document.createElement('li');
    li.classList.add('flip-card');

    let divInner = document.createElement('div');
    divInner.classList.add('flip-card-inner');

    // Create front of the card
    let divFront = document.createElement('div');
    divFront.classList.add('flip-card-front');

    let imgFront = document.createElement('img');
    imgFront.setAttribute('src', 'assets/images/front-side.png');
    imgFront.setAttribute('data-name', object.name);
    divFront.appendChild(imgFront);

    // Create card back side
    let divBack = document.createElement('div');
    divBack.classList.add('flip-card-back');

    let imgBack = document.createElement('img');
    imgBack.setAttribute('src', object.img);

    divBack.appendChild(imgBack);

    divInner.appendChild(divFront);
    divInner.appendChild(divBack);
    li.appendChild(divInner);

    document.getElementById('cards-container').appendChild(li);
}
// Create an array of cards with image sources and names 

let cardArray = [{
        name: 'cat',
        img: 'assets/images/img1.jpeg'
    },
    {
        name: 'koala',
        img: 'assets/images/img3.jpeg'
    },
    {
        name: 'unicorn',
        img: 'assets/images/img6.jpeg'
    },
    {
        name: 'cat2',
        img: 'assets/images/img7.jpeg'
    },
    {
        name: 'elephant',
        img: 'assets/images/img9.jpeg'
    },
    {
        name: 'kitty',
        img: 'assets/images/img11.png'
    },
    {
        name: 'chick',
        img: 'assets/images/img12.jpeg'
    },
    {
        name: 'pikka',
        img: 'assets/images/img4.png'
    },
    {
        name: 'coffee',
        img: 'assets/images/img8.jpeg'
    },
    {
        name: 'duggee',
        img: 'assets/images/dugee.jpeg'
    },
]
// Create runGame function so we can create the game board cards 
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's choice has been processed
 */
function runGame(length) {
    let number = length / 2
    let newArray = cardArray.slice(0, number)
    //** Sort the array in that way that it will always be random for the player */
    let doubledArray = newArray.concat(newArray).sort(() => Math.random() - 0.5);
    let cardsCollection = document.getElementsByClassName('flip-card');
    let cardsArray = [...cardsCollection];
    cardsArray.forEach((card) => {
        card.remove();

    })
    // Make the array of cards doubled in order to have a pair for each 
    for (i = 0; i < doubledArray.length; i++) {
        createCard(doubledArray[i]);
    }
    // Create the click event to make the cards flip on click 

    cardsCollection = document.getElementsByClassName('flip-card');
    cardsArray = [...cardsCollection];
    cardsArray.forEach((card) => {
        card.addEventListener('click', (event) => {
            let cardElement = event.target.parentNode.parentNode;

            if (cardElement.style.transform !== 'rotateY(180deg)' && cardElement.classList.contains('flip-card-inner')) {
                // Add audio file on click 
                var audio = new Audio("Card-flip-sound-effect.mp3");
                audio.play();
                // Rotate the cards when clicked 
                cardElement.style.transform = 'rotateY(180deg)';
                let selectedOption = event.target.getAttribute('data-name');
                moves++;
                document.getElementById('score').innerHTML = Math.floor(moves / 2);
                setTimeout(() => {
                    // If the cards are matched and there is none left the game will be finished 
                    matchOption(selectedOption);
                    if (cardsArray.length === cardsMatched * 2) {
                        stopGame();
                    }
                }, 500);
            }
        })
    });
    startTime();
}

// Create time variable for keeping the time for the player 
function startTime() {
    clearTimeout(interval)
    time = 0;
    interval = setInterval(() => {
        time++;
        document.getElementById('time').innerHTML = time + 's';
    }, 500);
}

// Declare variables which we will use to match the cards and count the moves 
let option1 = '';
let option2 = '';
let moves = 0
let cardsMatched = 0

// Create matchOption function so we can match our cards in pairs 
function matchOption(selectedOption) {
    if (option1 === '') {
        option1 = selectedOption;
    } else if (option1 !== '') {
        option2 = selectedOption;
    }
    if (option1 !== '' && option2 !== '') {
        if (option1 === option2) {
            option1 = '';
            option2 = '';
            cardsMatched++;
            document.getElementById('matched-cards').innerHTML = cardsMatched;
            var audio = new Audio("Good-idea-bell.mp3");
            audio.play();
        } else {
            flipBack(option1);
            flipBack(option2);
            var audio = new Audio("Error-sound.mp3");
            audio.play();
            option1 = '';
            option2 = '';
        }
    }
}

// Create flipBack function so that our cards will flip back if they do not match 

function flipBack(option) {
    document.querySelectorAll(`img[data-name=${option}]`).forEach((card) => {

        card.parentNode.parentNode.style.transform = 'rotateY(0deg)';
    });
}
// Create functions to control levels of difficulty
// Easy Level
function easylevel() {
    runGame(8);
    modal.style.display = "none";
    congrats.style.display = "none";
}
// Medium Level
function mediumlevel() {
    runGame(12);
    modal.style.display = "none";
    congrats.style.display = "none";
}
// Hard Level 
function hardlevel() {
    runGame(16);
    modal.style.display = "none";
    congrats.style.display = "none";
}
// Game finished refresh everything and start again
function stopGame() {
    document.getElementById('congrats').style.display = 'block';

    clearTimeout(interval);
    document.getElementById('result1').innerHTML = `You have made: ${moves / 2} moves`;
    document.getElementById('result2').innerHTML = `In ${time} seconds`;
    document.getElementById('result3').innerHTML = `And Matched ${cardsMatched} cards`;

    moves = '';
    cardsMatched = '';

    var audio = new Audio("Winning-game-sound-effect.mp3");
    audio.play();
}