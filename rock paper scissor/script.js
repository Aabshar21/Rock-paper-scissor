let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userElement= document.querySelector("#user");
const compElement = document.querySelector("#comp");
const reset = document.querySelector("#restart");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
}

const drawGame = () =>{
    msg.innerText = "It is a Draw!! Play Again";
    msg.style.backgroundColor = "#14213d";
}

const showWinner = (userWin, userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userElement.innerText = userScore;
        msg.innerText = `You Win!! Hurray! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compElement.innerText = compScore;
        msg.innerText = `You Lose!! Better luck next time! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const play = (userChoice) => {

    //Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="Rock") {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;   
        }
        else{
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin ,userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice);
    })
})

reset.addEventListener("click", () => {

    //Reset the score to zero
    userScore = 0;
    compScore = 0;

    //Update the score display
    userElement.innerText = userScore;
    compElement.innerText = compScore;

    //Reset the message
    msg.innerText = "Play your turn";
    msg.style.backgroundColor = "#14213d";
});
