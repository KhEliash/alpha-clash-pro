function play() {
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");

  const playSection = document.getElementById("play-screen");
  playSection.classList.remove("hidden");

  continueGame();
}

function continueGame() {
  const alphabets = "adiehfnjvneopeioowuh";
  const alphabetSplit = alphabets.split("");
  // console.log(alphabetSplit);
  // random index
  const randomNum = Math.random() * 19;
  const index = Math.round(randomNum);

  const alphabetIndex = alphabetSplit[index];
  // console.log(alphabetIndex);
  const currentAlphabet = document.getElementById("current-letter");
  currentAlphabet.innerText = alphabetIndex;
  // color
  setColor(alphabetIndex);
}

// color
function setColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

// // with function
//  function play(params) {

//  }
