let colorToGuess;
const getPar = document.querySelector('#rgb-color');
const getAnswer = document.querySelector('#answer');
const getScorePar = document.getElementById('score');

// Gera uma cor aleatoria
const generateRandomColour = () => {
  const r = Math.floor(Math.random() * 254);
  const g = Math.floor(Math.random() * 254);
  const b = Math.floor(Math.random() * 254);

  return `rgb(${r}, ${g}, ${b})`;
};

// Cria os circulos na pagina
const generateCircles = () => {
  const getDivCircle = document.querySelector('#colours');

  for (let i = 0; i < 6; i += 1) {
    const createNewDiv = document.createElement('div');
    createNewDiv.className = 'ball';
    getDivCircle.appendChild(createNewDiv);
  }
};

// Funcao para colorir os circulos
const paintCircles = () => {
  const getCircles = document.querySelectorAll('.ball');
  const numberToRightColour = Math.floor(Math.random() * 6);
  for (let i = 0; i < getCircles.length; i += 1) {
    if (i === numberToRightColour) {
      getCircles[i].style.backgroundColor = colorToGuess;
    } else {
      getCircles[i].style.backgroundColor = generateRandomColour();
    }
  }
};

// Verifica se acertou ou errou o Guess!
const gameSituation = () => {
  const getCircles = document.querySelectorAll('.ball');
  getAnswer.innerHTML = 'Escolha uma cor';
  const theColour = colorToGuess;

  for (let i = 0; i < getCircles.length; i += 1) {
    getCircles[i].addEventListener('click', () => {
      if (getCircles[i].style.backgroundColor === theColour) {
        getAnswer.innerHTML = 'Acertou!';
        let getActualScore = parseInt(getScorePar.innerHTML, 10);
        getActualScore += 3;
        getScorePar.innerHTML = getActualScore;
      } else {
        getAnswer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
};

// Funcao para resetar o game
const resetGame = () => {
  const getResetBtn = document.getElementById('reset-game');
  getResetBtn.addEventListener('click', () => {
    colorToGuess = generateRandomColour();
    getPar.innerHTML = colorToGuess;
    gameSituation();
    paintCircles();
  });
};

window.onload = () => {
  colorToGuess = generateRandomColour();
  getPar.innerHTML = colorToGuess;
  generateCircles();
  paintCircles();
  gameSituation();
  resetGame();
};
