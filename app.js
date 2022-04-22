const userSelect = document.getElementById("user-option");
const pcSelect = document.getElementById("pc-option");
const scoreUser = document.getElementById("scoreUser");
const scoreMachine = document.getElementById("scoreMachine");
const score = document.getElementById("score");
const button = document.querySelectorAll(".button");
let contMachine=0;
let contUser=0;

button.forEach((select) => {
  select.addEventListener("click", (option) => {
    const userOption = option.path[0].id;
    optionSelected(userOption);
  });
});

function optionSelected(option) {
  if (option === "rock") {
    userSelect.innerHTML = option;
    userSelect.src = '/assets/4.png'
  }
  if (option === "paper") {
    userSelect.innerHTML = option;
    userSelect.src = '/assets/6.png'
  }
  if (option === "scissor") {
    userSelect.innerHTML = option;
    userSelect.src = '/assets/5.png'
  }

  machineOption();
  scoreFunction();
}

function machineOption() {
  const optionMachine = Math.floor(Math.random() * button.length);
  if (optionMachine === 0) {
    pcSelect.innerHTML = "rock";
    pcSelect.src = '/assets/1.png'
  } else if (optionMachine === 1) {
    pcSelect.innerHTML = "paper";
    pcSelect.src = '/assets/3.png'
  } else {
    pcSelect.innerHTML = "scissor";
    pcSelect.src = '/assets/2.png'
  }
}


function scoreFunction(){
    if(pcSelect.textContent === userSelect.textContent){
        score.innerHTML= 'its a tie'
        score.style.color = 'black'
    }
    if(pcSelect.textContent == 'rock' && userSelect.textContent == 'scissor'){
        score.innerHTML= 'Machine Win'
        score.style.color = 'red'
        contMachine +=1
    }
    if(pcSelect.textContent == 'scissor' && userSelect.textContent == 'paper'){
        score.innerHTML= 'Machine Win'
        score.style.color = 'red'
        contMachine +=1
    }
    if(pcSelect.textContent == 'paper' && userSelect.textContent == 'rock'){
        score.innerHTML= 'Machine Win'
        score.style.color = 'red'
        contMachine +=1
    }
    if(userSelect.textContent == 'rock' && pcSelect.textContent == 'scissor'){
        score.innerHTML= 'User Win'
        score.style.color = 'green'
        contUser +=1
    }
    if(userSelect.textContent == 'scissor' && pcSelect.textContent == 'paper'){
        score.innerHTML= 'User Win'
        score.style.color = 'green'
        contUser +=1
    }
    if(userSelect.textContent == 'paper' && pcSelect.textContent == 'rock'){
        score.innerHTML= 'User Win'
        score.style.color = 'green'
        contUser +=1
    }
    scoreUser.innerHTML = contUser;
    scoreMachine.innerHTML = contMachine;

}
