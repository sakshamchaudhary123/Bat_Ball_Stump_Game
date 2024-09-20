// resetScore function is used to reset the score of the game

// Creating a score object to see the score of the game

// 1> getItem is used to get the score from the local storage
// 2> JSON.parse is used to convert the JSON string into JavaScript object
// 3> if scoreStr is not present then create a new object with win, lost and tie as 0
// 4> Otherwise, create a new JSON object with the scoreStr


let scoreStr = localStorage.getItem("score"); 
let score ;
resetScore(scoreStr);

function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) :  { 
    win: 0,
    lost: 0,
    tie: 0,
  };  
  
  score.displayScore = function () {
    return `🏆Won: ${score.win}, 🥺 Lost: ${score.lost}, 😯 Tie: ${score.tie}`;
  };

  showResult();  // we can also ('', '', '') to show the result as empty but it will show the text of your choice , computer choice and result
}

// generateComputerChoice function is used to get computer choice

function generateComputerChoice() {
  // This will generate a random number between 0 and 3
  let randomNumber = Math.random() * 3;

  if (randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

// getResult function is used to get the result of the game


function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "User won";
    } else if (computerMove === "Bat") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer has won";
    }
  } else if (userMove === "Ball") {
    // check if user has won, lost or it's a tie
    if (computerMove === "Ball") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Bat") {
      score.lost++;
      return "Computer has won";
    } else if (computerMove === "Stump") {
      score.win++;
      return "User won.";
    }
  } else if (userMove === "Stump") {
    // check if user has won, lost or it's a tie
    if (computerMove === "Ball") {
      score.lost++;
      return "Computer has won";
    } else if (computerMove === "Bat") {
      score.win++;
      return "User won.";
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a tie`;
    }
  }
}

// showResult function is used to display the result

// 1> JSON.stringify is used to convert the JavaScript object into JSON string
// 2> setItem is used to store the score in the local storage

function showResult(userMove, computerMove, result) {
  localStorage.setItem("score", JSON.stringify(score)); 

  //   i can also change it
  // document.querySelector('#user-move').innerText =
  //   userMove ? `You have chosen ${userMove}` : '';


  document.querySelector('#user-move').innerText =
    userMove !== undefined ? `You have chosen ${userMove}` : '';
  document.querySelector('#computer-move').innerText =
    userMove !== undefined ?  `Computer choice is ${computerMove}` : '';
  document.querySelector('#result').innerText =
    userMove !== undefined ?  result : '';
  document.querySelector('#score').innerText = score.displayScore();

}
