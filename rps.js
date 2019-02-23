let scoreboard = document.querySelector(".scoreboard"),
    playerScore = 0,
    compScore = 0,
    playerScoreBox = document.getElementById("p-score"),
    compScoreBox = document.getElementById("comp-score"),
    resetButton = document.getElementById("game-reset");

let message = document.getElementById("message"),
    result = document.getElementById("game-results");

let rockHandButton = document.getElementById("hand-rock"),
    paperHandButton = document.getElementById('hand-paper'),
    scissorHandButton = document.getElementById("hand-scissor");

let literalRock = document.getElementById("rock-visible"),
    literalPaper = document.getElementById("paper-visible"),
    literalScissor = document.getElementById("scissor-visible"),
    rockColor = document.getElementById("rock-color"),
    paperColor = document.getElementById("paper-color"),
    scissorColor = document.getElementById("scissor-color");

function endgame(player, comp) {
    if (player === comp) {
      result.innerHTML = "It's a tie!";
    } else if (player === "Rock"){
      if (comp === "Paper") {
        compScore += 1;
        result.innerHTML = "Paper covers rock. Player loses. +1 to Computer";
      } else if (comp === "Scissors") {
        playerScore += 1;
        result.innerHTML = "Rock smashes scissors. +1 to Player";
      }
    } else if (player === "Paper") {
      if (comp === "Scissors") {
        compScore += 1;
        result.innerHTML = "Scissors cut paper. Player loses. +1 to Computer";
      } else if (comp === "Rock") {
        playerScore += 1;
        result.innerHTML = "Paper covers rock. +1 to Player";
      } 
    } else if (player === "Scissors") {
      if (comp === "Rock") {
        compScore += 1;
        result.innerHTML = "Rock smashes scissors. Player loses. +1 to Computer";
      } else if (comp === "Paper") {
        playerScore += 1;
        result.innerHTML = "Scissors cut paper. + 1 to Player";
      }
    }
    updateScore();
}

function colors(player, comp) {
    rockColor.style.fill = "#293132";
    paperColor.style.fill = "#293132";
    scissorColor.style.fill = "#293132";

    literalRock.style.display = "none";
    literalPaper.style.display = "none";
    literalScissor.style.display = "none";

    if (player === comp) {
      if (player === "Rock") {
        literalRock.style.display = "inline";
        rockColor.style.fill = "#FFC857";
      } else if (player === "Paper") {
        literalPaper.style.display = "inline";
        paperColor.style.fill = "#FFC857";
      } else {
        literalScissor.style.display = "inline";
        scissorColor.style.fill = "#FFC857";
      }
    } else {
      switch (player) {
        case "Rock":
          literalRock.style.display = "inline";
          rockColor.style.fill = "#4DCE9B";
          break;
        case "Paper":
          literalPaper.style.display = "inline";
          paperColor.style.fill = "#4DCE9B";
          break;
        case "Scissors":
          literalScissor.style.display = "inline";
          scissorColor.style.fill = "#4DCE9B";
          break;
      }
      switch (comp) {
        case "Rock":
          literalRock.style.display = "inline";
          rockColor.style.fill = "#65559B";
          break;
        case "Paper":
          literalPaper.style.display = "inline";
          paperColor.style.fill = "#65559B";
          break;
        case "Scissors":
          literalScissor.style.display = "inline";
          scissorColor.style.fill = "#65559B";
          break;
      }
    }
}

function updateScore() {
    playerScoreBox.innerHTML = playerScore;
    compScoreBox.innerHTML = compScore;
}

function computer() {
    let choices = ["Rock", "Paper", "Scissors"];
    choice = choices[Math.floor(Math.random() * 3)];

    return choice;
}

function game(playerChoice) {
    let compChoice = computer();
    colors(playerChoice, compChoice);
    endgame(playerChoice, compChoice);

    message.innerHTML = "Your " + playerChoice + " vs. Their " + compChoice;

    
}

rockHandButton.addEventListener('click', function () {
    game("Rock");
});
paperHandButton.addEventListener('click', function () {
    game("Paper");
});
scissorHandButton.addEventListener('click', function () {
    game("Scissors");
});

resetButton.addEventListener('click', function (){
    playerScore = 0;
    compScore = 0;
    updateScore();
})