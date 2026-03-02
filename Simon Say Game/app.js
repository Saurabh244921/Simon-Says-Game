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

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColour = buttonColours[randIdx];
    let randBtn = document.querySelector(`.${randColour}`);
    btnFlash(randBtn);
}

function btnPress(){
let btn = this;
btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}