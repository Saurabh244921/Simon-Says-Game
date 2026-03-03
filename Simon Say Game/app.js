let gamePattern = [];
let userPattern = [];
let buttonColours = ["green", "red", "blue", "yellow"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;
document.addEventListener("keypress", function () {
    if(started == false){
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function checkAns(idx){
    if(gamePattern[idx] === userPattern[idx]){
        if(userPattern.length == gamePattern.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = "Game Over! Press any key to restart";
    }
}

function levelUp(){
    userPattern = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColour = buttonColours[randIdx];
    let randBtn = document.querySelector(`.${randColour}`);
    gamePattern.push(randColour);
    btnFlash(randBtn);
}

function btnPress(){
let btn = this;
btnFlash(btn);
let userbtn = btn.getAttribute("id");
userPattern.push(userbtn);
console.log(userPattern);
checkAns(userPattern.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}