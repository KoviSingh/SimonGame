let gameSeq = [];
let userSeq = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let h2 = document.querySelector("h2");
let level = 0;
let started = false;
document.addEventListener("keypress", function() {
  if (!started) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});
function btnFlash(boxrand){
    boxrand.classList.add("flash");
    setTimeout(function(){
        boxrand.classList.remove("flash");
    }, 250);
}
function userFlash(boxrand){
    boxrand.classList.add("userflash");
    setTimeout(function(){
        boxrand.classList.remove("userflash");
    }, 250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = "Level " + level;
    let randomNum = Math.floor(Math.random() * 4);
    let randomColor = buttonColors[randomNum];
    let boxrand = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(boxrand);  
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let buttons = document.querySelectorAll(".box");
for(btn of buttons){
    btn.addEventListener("click",btnPress);
}
function checkAns(idx){

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            console.log("Correct");
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}
function reset(){
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}