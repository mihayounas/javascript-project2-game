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
createCard('/assets/images/img2.jpeg');
createCard('/assets/images/img3.jpeg');
createCard('/assets/images/img4.jpeg');
createCard('/assets/images/img5.jpeg');
createCard('/assets/images/img6.jpeg');
createCard('/assets/images/img7.jpeg');
createCard('/assets/images/img8.jpeg');
createCard('/assets/images/img9.jpeg');
createCard('/assets/images/img10.jpeg');
createCard('/assets/images/img11.png');
createCard('/assets/images/img12.png');

const card = document.querySelector('.flip-card')
const inner = card.addEventListener('click', () => {
    document.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)'
})

function runGame() {

}

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