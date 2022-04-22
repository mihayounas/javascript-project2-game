// Wait for Dom to load before running the game
var modal = document.getElementById("myModal");
let time = 0;
let interval;
document.addEventListener("DOMContentLoaded", function() {
    //Create pop up modal function
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";

    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        alert('Please chose a level')
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "block";

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
    imgFront.setAttribute('src', 'assets/images/front-side.png')
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
    //Make the array of cards doubled in order to have a pair for each
    for (i = 0; i < doubledArray.length; i++) {
        createCard(doubledArray[i])
    }
    // Create the click event to make the cards flip on click

    cardsCollection = document.getElementsByClassName('flip-card')
    cardsArray = [...cardsCollection]
    cardsArray.forEach((card) => {
        card.addEventListener('click', (event) => {
            let cardElement = event.target.parentNode.parentNode

            if (cardElement.style.transform !== 'rotateY(180deg)' && cardElement.classList.contains('flip-card-inner')) {
                //Add audio file on click
                var audio = new Audio("Card-flip-sound-effect.mp3");
                audio.play();
                //Rotate the cards when clicked
                cardElement.style.transform = 'rotateY(180deg)'
                let selectedOption = event.target.getAttribute('data-name')
                moves++
                document.getElementById('score').innerHTML = Math.floor(moves / 2);
                setTimeout(() => {
                    //If the cards are matched and there is none left the game will be finished
                    matchOption(selectedOption)
                    if (cardsArray.length === cardsMatched * 2) {
                        stopGame()
                    }

                }, 500)



            }
        })



    });
    startTime()
}

//Create time variable for keeping the time for the player
function startTime() {
    clearTimeout(interval)
    time = 0;
    interval = setInterval(() => {
        time++;
        document.getElementById('time').innerHTML = time + 's'
    }, 1000)

}

//Declare variables which we will use to match the cards and count the moves
let option1 = '';
let option2 = '';
let moves = 0
let cardsMatched = 0

//Create matchOption function so we can match our cards in pairs

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
            cardsMatched++
            document.getElementById('matched-cards').innerHTML = cardsMatched
        } else {
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
//Easy Level
function easylevel() {
    runGame(4)
    modal.style.display = "none";
    congrats.style.display = "none"
}
//Medium Level
function mediumlevel() {
    runGame(8)
    modal.style.display = "none";
    congrats.style.display = "none"
}
//Hard Level
function hardlevel() {
    runGame(12)
    modal.style.display = "none";
    congrats.style.display = "none"
}
//Game finished refresh everything and start again

function stopGame() {
    document.getElementById('congrats').style.display = 'block'

    clearTimeout(interval)

    document.getElementById('result1').innerHTML = 'You have made :' + ' ' + moves / 2 + ' ' + 'moves';
    document.getElementById('result2').innerHTML = 'In' + ' ' + time + ' ' + 'seconds ';
    document.getElementById('result3').innerHTML = 'And Matched' + ' ' + cardsMatched + ' ' + 'cards';

    moves = '';
    cardsMatched = '';


}

//Fireworks 
const max_fireworks = 5,
    max_sparks = 50;
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let fireworks = [];

for (let i = 0; i < max_fireworks; i++) {
    let firework = {
        sparks: []
    };
    for (let n = 0; n < max_sparks; n++) {
        let spark = {
            vx: Math.random() * 5 + .5,
            vy: Math.random() * 5 + .5,
            weight: Math.random() * .3 + .03,
            red: Math.floor(Math.random() * 2),
            green: Math.floor(Math.random() * 2),
            blue: Math.floor(Math.random() * 2)
        };
        if (Math.random() > .5) spark.vx = -spark.vx;
        if (Math.random() > .5) spark.vy = -spark.vy;
        firework.sparks.push(spark);
    }
    fireworks.push(firework);
    resetFirework(firework);
}
window.requestAnimationFrame(explode);

function resetFirework(firework) {
    firework.x = Math.floor(Math.random() * canvas.width);
    firework.y = canvas.height;
    firework.age = 0;
    firework.phase = 'fly';
}

function explode() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        if (firework.phase == 'explode') {
            firework.sparks.forEach((spark) => {
                for (let i = 0; i < 10; i++) {
                    let trailAge = firework.age + i;
                    let x = firework.x + spark.vx * trailAge;
                    let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
                    let fade = i * 20 - firework.age * 2;
                    let r = Math.floor(spark.red * fade);
                    let g = Math.floor(spark.green * fade);
                    let b = Math.floor(spark.blue * fade);
                    context.beginPath();
                    context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
                    context.rect(x, y, 4, 4);
                    context.fill();
                }
            });
            firework.age++;
            if (firework.age > 100 && Math.random() < .05) {
                resetFirework(firework);
            }
        } else {
            firework.y = firework.y - 10;
            for (let spark = 0; spark < 15; spark++) {
                context.beginPath();
                context.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
                context.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
                context.fill();
            }
            if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode';
        }
    });
    window.requestAnimationFrame(explode);
}