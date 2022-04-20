var element;
var inter;

const gameOver = document.getElementById('endGame');
const blueJeep = document.getElementById('blueJeep');
const hun = document.getElementById("hun");
const area = document.getElementsByClassName("area")[0];

//HUDULGUDUG FUNKTSUUD

function moveSelection(evt) {
    if (inter) {
        clearTimeout(inter);
    }
    inter = setInterval(move, 20, evt)
}

function move(evt) {
    if (evt.keyCode == 65 || evt.keyCode == 37) {
        // LEFT
        if (hun.style.left > 0 + '%') {
            hun.style.left = (parseFloat(hun.style.left) - 0.5) + '%';
        }
        hun.style.transform = 'scaleX(-1)'
    }
    if (evt.keyCode == 68 || evt.keyCode == 39) {
        // RIGHT
        if (hun.style.left < 93 + '%') {
            hun.style.left = (parseFloat(hun.style.left) + 0.5) + '%';
        }
        hun.style.transform = 'scaleX(1)'
    }
    if (evt.keyCode == 83 || evt.keyCode == 40) {
        // DOWN
        if (hun.style.top < 85 + '%'){
            hun.style.top = (parseFloat(hun.style.top) + 0.5) + '%';
        }
    }
    if (evt.keyCode == 87 || evt.keyCode == 38) {
        // UP
        if (hun.style.top > 49 + '%') {
            hun.style.top = (parseFloat(hun.style.top) - 0.5) + '%';
        }
    }
}

function moving(evt) {
    clearInterval(inter)
    inter = null;
}

window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving);

// DARAACHIIN GAZAR SONGOH

function nextMove(){
    if(area.getBoundingClientRect().left <= hun.getBoundingClientRect().right && area.getBoundingClientRect().right >= hun.getBoundingClientRect().left && area.getBoundingClientRect().bottom >= hun.getBoundingClientRect().bottom){
        endGame();
    }
}

setInterval(nextMove, 0.1)

function endGame(){
    gameOver.classList.add('gameOver');
    gameOver.innerHTML = 'GAME OVER';
    // element.style.transform = 'rotate(90deg)';
    // element.style.transform = 'scaleX(-1)';
    // blueJeep.style.animationPlayState = 'paused';
    return;
}
function murguh(){
    if(blueJeep.getBoundingClientRect().bottom >= element.getBoundingClientRect().top && blueJeep.getBoundingClientRect().top <= element.getBoundingClientRect().bottom){
        if(blueJeep.getBoundingClientRect().right >= element.getBoundingClientRect().left && blueJeep.getBoundingClientRect().left <= element.getBoundingClientRect().right) {
            endGame();
        }
    }
    
};

//setInterval( murguh, 0.1)