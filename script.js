const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timer = document.querySelector("#countdown");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const dif = document.querySelector("#dif");

let timerId = null;
let result = 0;
let hitPosition;
let count;
let countFinal;

easy.addEventListener("click", easyMode);
medium.addEventListener("click", mediumMode);
hard.addEventListener("click", hardMode);

function randomSquare() { 
    squares.forEach(square => { 
        square.classList.remove("mole");
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add("mole");
    hitPosition = randomSquare.id;
}

squares.forEach(square => { 
    square.addEventListener('mousedown', ()=> { 
            if(square.id == hitPosition){ 
                result++;
                score.textContent = result;
                hitPosition = null;
            }
    })
})


function moveMole(x) { 
    timerId = setInterval(randomSquare, x);
}

function timeLeft() { 
   count--;
   timer.innerHTML = count;
   if(count == 0) {
    clearInterval(countFinal);
    clearInterval(timerId);
    document.querySelector("#end").innerHTML = "GAME ENDED, your score is " + result;
    dif.classList.remove("hide");
   }
   if (count > 0){ 
    document.querySelector("#end").innerHTML = "";
    dif.classList.add("hide");
   }
   
}


function easyMode(){ 
    countFinal = setInterval(timeLeft, 1000);

    count = 60;
    moveMole(2000);
    timeLeft();
}
function hardMode(){ 
    count = 10;
    countFinal = setInterval(timeLeft, 1000);
    moveMole(500);
    timeLeft();
}
function mediumMode(){ 
    countFinal = setInterval(timeLeft, 1000);

    count = 30;
    moveMole(1000);
    timeLeft();
}