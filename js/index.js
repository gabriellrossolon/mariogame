const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let music = document.getElementById("backMusic");


const playMusic = () => {
    music.volume = 0.1;
    if (music.paused) {
        music.currentTime = 0;
        music.load();
        music.play();
    }
}

const stopMusic = () => {
    if (music.play) {
        music.pause();
    }
}

function gameOverSound() {
    let gameOverSound = document.getElementById("dieSound");
    gameOverSound.volume = 0.2;
    gameOverSound.play();
}

const startGame = () => {
    pipe.classList.remove('pipe-parado')

    setTimeout(() => {
        pipe.classList.add('pipe-animation');
    }, 0);
}

    function restartGame() {
        if (marioDied === true) {
            marioDied = false;

            location.reload();
            // mario.src= './images/mario.gif';
            // mario.style.width = '150px';
            // mario.style.marginLeft = '0';
        }

    }

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

let marioDied = false;

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario). bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        marioDied = true;

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;

        mario.src= './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

        gameOverSound();
        stopMusic();
    }
}, 10);


document.addEventListener('keydown', jump);
document.addEventListener('click', () => {
    jump();
    playMusic();
    startGame();
    restartGame();
});


