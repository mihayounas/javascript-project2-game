// Wait for Dom to load before running the game
var modal = document.getElementById("myModal");
document.addEventListener("DOMContentLoaded", function() {
    function refresh() {
        window.location.reload("Refresh")
    }

    //Create pop up modal function


    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        runGame(4)
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

})



// Create our html elements Cards with classes and ids

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

// Create an array of cards with image sources and names 

let cardArray = [{
        name: 'cat',
        img: '/assets/images/img1.jpeg'
    },

    {
        name: 'koala',
        img: '/assets/images/img3.jpeg'
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
        name: 'elephant',
        img: '/assets/images/img9.jpeg'
    },
    {
        name: 'kitty',
        img: '/assets/images/img11.png'
    },
]


// Sort the array in that way that it will always be randon for the player
cardArray.sort(() => 0.5 - Math.random());

// Create runGame function so we can create the game board cards

function runGame(length) {
    let number = length / 2
    let newArray = cardArray.slice(0, number)
    let doubledArray = newArray.concat(newArray).sort(() => Math.random() - 0.5);
    let cardsCollection = document.getElementsByClassName('flip-card')
    let cardsArray = [...cardsCollection]
    cardsArray.forEach((card) => {
        card.remove()

    })
    for (i = 0; i < doubledArray.length; i++) {
        createCard(doubledArray[i])
    }
    // Create the click event to make the cards flip on click
    cardsCollection = document.getElementsByClassName('flip-card')
    cardsArray = [...cardsCollection]
    cardsArray.forEach((card) => {
        card.addEventListener('click', (event) => {
            event.target.parentNode.parentNode.style.transform = 'rotateY(180deg)'
            let selectedOption = event.target.getAttribute('data-name')
            moves++
            document.getElementById('score').innerHTML = Math.floor(moves / 2)
            setTimeout(() => matchOption(selectedOption), 500)
        })

    })
    time()
}

//Create time variable for keeping the time for the player
function time() {
    let time = 0;
    setInterval(() => {
        time++;
        document.getElementById('time').innerHTML = time + 's'
    }, 1000)

}

//Declare variables which we will use to match the cards and count the moves
let option1 = '';
let option2 = '';
let moves = []
let cardsMatched = []
//Create matchOption function so we can match our cards in pairs

function matchOption(selectedOption) {
    if (option1 === '') {
        option1 = selectedOption;
    } else if (option1 !== '') {
        option2 = selectedOption;
    }
    if (option1 !== '' && option2 !== '') {
        if (option1 === option2) {

            alert('You Found a Match')
            option1 = '';
            option2 = '';
            cardsMatched++
            document.getElementById('matched-cards').innerHTML = cardsMatched
        } else {
            alert('Sorry Try Again!')

            flipBack(option1);
            flipBack(option2);

            option1 = '';
            option2 = '';

        }
    }
}


//Create flipBack function so that our cards will flip back if they do not match

function flipBack(option) {
    document.querySelectorAll(`img[data-name=${option}]`).forEach((card) => {
        card.parentNode.parentNode.style.transform = 'rotateY(0deg)'
    })

}

//Create functions to control levels of difficulty
function easylevel() {
    runGame(4)
    modal.style.display = "none";

}

function mediumlevel() {
    runGame(8)
    modal.style.display = "none";
}

function hardlevel() {
    runGame(12)
    modal.style.display = "none";
}