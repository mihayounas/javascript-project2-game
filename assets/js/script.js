let cards = document.querySelectorAll('.card-container');
let cardFlipped = false;
let lockCard = false;
let card1, card2

function flipCard() {
    if (lockCard) return;
    if (this === card1) return;
    this.classList.toggle('switch');
    this.classList.add('switch');
    if (!cardFlipped) {
        cardFlipped = true;
        card1 = this;
        return;
    }
}
card2 = this;
checkForMatch()

function checkForMatch() {
    if (card1.dataset.frame === card2.dataset.frame) {
        freezeCards();
        return;
    }
    turnCards();
}

function freezeCards() {
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);
    resetCard();
}

function turnCards() {
    lockCard = true; +
    setTimeout(() => {
        card1.classList.remove('switch');
        card2.classList.remove('switch');
        resetCard();
    }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));

function resetBoard() {
    [cardFlipped, lockCard] = [false, false];
    [card1, card2] = [null, null];
}

function mix() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
}