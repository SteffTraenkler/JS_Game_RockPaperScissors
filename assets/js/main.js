let rounds = document.getElementById('rounds');
let r5 = document.getElementById('r5');
let r10 = document.getElementById('r10');
let r15 = document.getElementById('r15');
let r20 = document.getElementById('r20');
let userCountInner = document.getElementById('user');
let pcCountInner = document.getElementById('pc');
let restart = document.getElementById('restart');

let textResult = document.querySelector('#innerResult');


let userClick = document.getElementsByClassName('button');

let choices = ['Rock', 'Paper', 'Scissors'];

let userChoice;
let r;
let pcChoice;
let j = 0;
let pcCount;
let userCount;


for (let i = 0; i < userClick.length; i++) {
    userClick[i].addEventListener('click', function () {
        j++
        console.log('%c New Round', 'color: yellowgreen; font-size=900');
        console.log('Round Number: ' + j);
        if (j > r) {
            console.log('No more rounds possible');
            if (pcCount > userCount) {
                textResult.style.fontSize = '1em';
                textResult.innerHTML = `Sorry, but you lost. Wanna try again?`;
                console.log('Sorry, but you lost. Wanna try again?');
            } else if (userCount > pcCount) {
                textResult.style.fontSize = '1em';
                textResult.innerHTML = `You did it! You won! Wanna try another game?`;
                console.log('You did it! You won! Wanna try another game?');
            } else if (userCount = pcCount) {
                textResult.style.fontSize = '1em';
                textResult.innerHTML = `Its a draw. Try again?`;
                console.log('Its a draw. Try again?');
            }
            return
        } else {
            styleScissors.classList.remove('sWin', 'sDraw', 'sLost');
            styleRock.classList.remove('rWin', 'rDraw', 'rLost');
            stylePaper.classList.remove('pWin', 'pDraw', 'pLost');
            choosedRounds();
            rounds.style.display = 'block';
            rounds.innerHTML = `Rounds: <br>${j} / ${r}`
            console.log('User choosed ' + this.id + ' and will go ' + r + ' rounds');
            userChoice = this.id;
            compChoice();
            gameResult();
            console.log('PC Count is: ' + pcCount);
            console.log('User Count is: ' + userCount);
            pcCountInner.innerHTML = `${pcCount}`;
            userCountInner.innerHTML = `${userCount}`;
        }
    })
}


function choosedRounds() {
    switch (true) {
        case r5.checked:
            console.log('r5 checked');
            r = 5;
            break;
        case r10.checked:
            console.log('r10 checked');
            r = 10;
            break;
        case r15.checked:
            console.log('r15 checked');
            r = 15;
            break;
        case r20.checked:
            console.log('r20 checked');
            r = 20;
            break;
        default:
            break;
    }
    console.log('rounds selected: ' + r);
}

function compChoice() {
    pcChoice = choices[Math.floor(Math.random() * userClick.length)];
    console.log('the PC Choice is ' + pcChoice);
}

pcCount = 0;
userCount = 0;
let stylePaper = document.querySelector('.pNone');
let styleRock = document.querySelector('.rNone');
let styleScissors = document.querySelector('.sNone');


function gameResult() {
    console.log('GameResult works');
    switch (userChoice + pcChoice) {
        case 'ScissorsPaper':
        case 'PaperRock':
        case 'RockScissors':
            console.log('You WIN!');
            textResult.style.fontSize = '0.7em';
            textResult.innerHTML = `Your Choice: ${userChoice} beats your opponent's choice: ${pcChoice}. That means, you WIN!`;
            userCount += 1;
            switch (userChoice) {
                case 'Scissors':
                    styleScissors.classList.add('sWin');
                    break;
                case 'Rock':
                    styleRock.classList.add('rWin');
                    break;
                case 'Paper':
                    stylePaper.classList.add('pWin');
                    break;
            }
            break;
        case 'ScissorsRock':
        case 'PaperScissors':
        case 'RockPaper':
            console.log('You LOSE!');
            textResult.style.fontSize = '0.7em';
            textResult.innerHTML = `Your opponent's choice: ${userChoice} beats your choice: ${pcChoice}. That means, you LOOSE!`;
            pcCount += 1;
            switch (userChoice) {
                case 'Scissors':
                    styleScissors.classList.add('sLost');
                    break;
                case 'Rock':
                    styleRock.classList.add('rLost');
                    break;
                case 'Paper':
                    stylePaper.classList.add('pLost');
                    break;
            }
            break;
        case 'ScissorsScissors':
        case 'PaperPaper':
        case 'RockRock':
            console.log('Its a DRAW!');
            textResult.style.fontSize = '0.7em';
            textResult.innerHTML = `Your Choice: ${userChoice} and your opponent's choice: ${pcChoice}. That means, it's a DRAW!`;
            switch (userChoice) {
                case 'Scissors':
                    styleScissors.classList.add('sDraw');
                    break;
                case 'Rock':
                    styleRock.classList.add('rDraw');
                    break;
                case 'Paper':
                    stylePaper.classList.add('pDraw');
                    break;
            }
            break;
        default:
            break;
    }
}

restart.addEventListener('click', () => {
    location.reload()
})