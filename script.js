let humanScore = 0;
let comScore = 0;

function playRound(playerSection) {
    const comSection = randomCom();
    showSections(playerSection, comSection);

    if (playerSection === 'rock' && comSection === 'rock') {
        document.querySelector('.text').innerText = 'Draw. Two Rock'
    } else if (playerSection === 'rock' && comSection === 'paper') {
        document.querySelector('.text').innerText = 'Lose';
        comScore++;
    } else if (playerSection === 'rock' && comSection === 'scissors') {
        document.querySelector('.text').innerText = 'Win';
        humanScore++;
    }

    if (playerSection === 'paper' && comSection === 'paper') {
        document.querySelector('.text').innerText = 'Draw. Two Paper'
    } else if (playerSection === 'paper' && comSection === 'scissors') {
        document.querySelector('.text').innerText = 'Lose';
        comScore++;
    } else if (playerSection === 'paper' && comSection === 'rock') {
        document.querySelector('.text').innerText = 'Win';
        humanScore++;
    }
    if (playerSection === 'scissors' && comSection === 'scissors') {
        document.querySelector('.text').innerText = 'Draw. Two Scissors'
    } else if (playerSection === 'scissors' && comSection === 'rock') {
        document.querySelector('.text').innerText = 'Lose';
        comScore++;
    } else if (playerSection === 'scissors' && comSection === 'paper') {
        document.querySelector('.text').innerText = 'Win';
        humanScore++;
    }
    updateScore(humanScore, comScore);
}

function updateScore(humanScore, comScore) {
    const $score = document.querySelector('.score p');
    $score.innerText = `${humanScore}-${comScore}`
    if (humanScore === 5 || comScore === 5) {
        setTimeout(() => finishGame(humanScore, comScore), 200);
    }
}

function finishGame(humanScore, comScore) {
    const $container = document.querySelector('.container');
    $container.classList.add('hidden');
    const $button = document.querySelector('.restart');
    const $result = document.querySelector('.result');
    if (humanScore > comScore) {
        $result.innerText = `You Win. ${humanScore}-${comScore}`;
    } else if (humanScore < comScore) {
        $result.innerText = `You Lose. ${humanScore}-${comScore}`;
    }
    $button.classList.remove('hidden');
    $result.classList.remove('hidden');
    $button.addEventListener('click', () => restartGame());
}

function restartGame() {
    humanScore = 0;
    comScore = 0;
    document.querySelector('.text') = '';
    const $button = document.querySelector('.restart');
    const $result = document.querySelector('.result');
    $button.classList.add('hidden');
    $result.classList.add('hidden');

    const $score = document.querySelector('.score p');
    $score.innerText = '0 - 0';
    const $playerSection = document.querySelector('.human_section');
    const $comSection = document.querySelector('.com_section');
    $playerSection.className = '';
    $playerSection.className = '';

    const $container = document.querySelector('.container');
    $container.classList.remove('hidden');
}

function showSections(playerSection, comSection) {
    const $playerSection = document.querySelector('.human_section');
    const $comSection = document.querySelector('.com_section');
    $playerSection.className = '';
    $playerSection.className = '';
    $playerSection.classList.add(playerSection);
    $comSection.classList.add(comSection);
}

function randomCom() {
    let options = ['rock', 'paper', 'scissors'];
    return (options[Math.floor(Math.random() * options.length)]);
}

function initialize() {
    const $options = document.querySelectorAll('.options>div');
    $options.forEach(option => option.addEventListener('click', (e) =>
        playRound(e.target.className)));
}
initialize();