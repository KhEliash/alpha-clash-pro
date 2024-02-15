function play() {
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");

  const playSection = document.getElementById("play-screen");
  playSection.classList.remove("hidden");

  continueGame();
}
function gameOver() {
  const playSection = document.getElementById('play-screen');
  playSection.classList.add('hidden');
  const final = document.getElementById('final-score');
  final.classList.remove('hidden');
// get final result score
  const gameResult = getTextElementValueById('current-score');
   setTextElementValueById('game-result', gameResult);

}
function playAgain( ) {
  const gameOver = document.getElementById('final-score');
  gameOver.classList.add('hidden');
  const playSection = document.getElementById("play-screen");
  playSection.classList.remove("hidden");
  setTextElementValueById('current-life',5);
  setTextElementValueById('current-score', 0);
  
}



function continueGame() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetSplit = alphabets.split("");
  // random index
  const randomNum = Math.random() * 25;
  const index = Math.round(randomNum);

  const alphabetIndex = alphabetSplit[index];
  // console.log(alphabetIndex);
  const currentAlphabet = document.getElementById("current-letter");
  currentAlphabet.innerText = alphabetIndex;
  // color
  setColor(alphabetIndex);
}

// keyboard capture
function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  // stop the game Esc pressed
  if (playerPressed === 'Escape'){
    gameOver();

  }
  // expected to pressed
  const currentAlphabet = document.getElementById("current-letter");
  const currentAlphabetElement = currentAlphabet.innerText;
  const expectedAlphabet = currentAlphabetElement.toLowerCase();
  // check matched or not
  if (playerPressed == expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    // ---------------------------------------
    // update score
    // const currentScoreElement  =document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;

    //  start a new round
    removeColor(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife == 0) {
      gameOver();
    }
    // --------------------------------
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

// utility
// color
function setColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
