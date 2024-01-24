let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let button = document.querySelector("#reset");

button.addEventListener("click", () =>{
    location.reload();
})

const genComputChoice = () => {

    let options = ["rock","scissor","paper"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}


const drawGame = () =>{
    msg.style.backgroundColor = "lightBlue";
    console.log("game draw");
    msg.innerText = "Game Draw😏"
    
}

// ... (previous code)

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!😎😎 ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose!☹️ ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// ... (remaining code)


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genComputChoice();
    console.log("Computer choice = ", compChoice)

    if(userChoice==compChoice){
        //draw
        drawGame();
    }
    else {
        let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
           userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin= compChoice==="rock"? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("clicked",userChoice);
        playGame(userChoice);
    });
});