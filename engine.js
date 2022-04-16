var element;
var inter;
function moveSelection(evt) {
    if (inter) {
        clearTimeout(inter);
    }

    inter = setInterval(move, 20, evt)
}
const gameOver = document.getElementById('endGame');
const blueJeep = document.getElementById('blueJeep');
element = document.getElementById("hun");

function move(evt) {
    if (evt.keyCode == 65) {
        // LEFT
        if (element.style.left >= 15 + '%') {
            element.style.left = (parseInt(element.style.left) - 1) + '%';
        }
        element.style.transform = 'scaleX(-1)'
    }
    if (evt.keyCode == 68) {
        // RIGHT
        if (element.style.left <= 94 + '%') {
            element.style.left = (parseInt(element.style.left) + 1) + '%';
        }
        element.style.transform = 'scaleX(1)'
    }
    if (evt.keyCode == 83) {
        // DOWN
        if (element.style.top <= 80 + '%') {
            element.style.top = (parseInt(element.style.top) + 1) + '%';
        }
    }
    if (evt.keyCode == 87) {
        // UP
        if (element.style.top >= 43 + '%') {
            element.style.top = (parseInt(element.style.top) - 1) + '%';
        }
    }

}
// function endGame(){
//     gameOver.classList.add('gameOver');
//     gameOver.innerHTML = 'GAME OVER';
//     element.style.transform = 'rotate(90deg)';
//     element.style.transform = 'scaleX(-1)';
//     blueJeep.style.animationPlayState = 'paused';
//     return;
// }
function murguh(){
    if(blueJeep.getBoundingClientRect().bottom >= element.getBoundingClientRect().top && blueJeep.getBoundingClientRect().top <= element.getBoundingClientRect().bottom){
        if(blueJeep.getBoundingClientRect().right >= element.getBoundingClientRect().left && blueJeep.getBoundingClientRect().left <= element.getBoundingClientRect().right) {
            endGame();
        }
    }
    
};

setInterval( murguh, 0.1)

function moving(evt) {
    clearInterval(inter)
    inter = null;
}

window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving);

function trafficLight() {
    
}