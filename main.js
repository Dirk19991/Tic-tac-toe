const gridContainer = document.querySelector(
  '.grid-container'
);
const winnerDiv = document.querySelector(
  '.winnerMessage'
);
const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [1, 4, 7],
  [6, 7, 8],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
function checkArrayHuman() {
  if (cellsArray.length <= 4) {
    console.log('start');
    const items =
      document.querySelectorAll('.item');
    const arrOfDivs = [];

    for (let member of items) {
      if (member.textContent === 'X') {
        arrOfDivs.push(+member.dataset.item);
      }
    }

    for (
      let i = 0;
      i < winningCombinations.length;
      i++
    ) {
      let tempArray = [];
      for (let j = 0; j < arrOfDivs.length; j++) {
        if (
          winningCombinations[i].includes(
            arrOfDivs[j]
          )
        ) {
          tempArray.push(arrOfDivs[j]);
          if (tempArray.length === 3) {
            winnerDiv.textContent = 'YOU WON';
          }
        }
      }
    }
  }
}

function checkArrayComp() {
  if (cellsArray.length <= 4) {
    console.log('startcomp');
    const items =
      document.querySelectorAll('.item');
    const arrOfDivs = [];

    for (let member of items) {
      if (member.textContent === '0') {
        arrOfDivs.push(+member.dataset.item);
      }
    }
    console.log(arrOfDivs);

    for (
      let i = 0;
      i < winningCombinations.length;
      i++
    ) {
      let tempArray = [];
      for (let j = 0; j < arrOfDivs.length; j++) {
        if (
          winningCombinations[i].includes(
            arrOfDivs[j]
          )
        ) {
          tempArray.push(arrOfDivs[j]);
          if (tempArray.length === 3) {
            winnerDiv.textContent =
              'COMPUTER WON';
          }
        }
      }
    }
  }
}

function tictac(e) {
  if (e.target.classList.contains('item')) {
    e.target.textContent = 'X';
    let indexOfPlayerCell = cellsArray.indexOf(
      +e.target.dataset.item
    );
    cellsArray.splice(indexOfPlayerCell, 1);

    let randomID = Math.floor(
      Math.random() * cellsArray.length
    ).toString();
    let computerGuess = document.querySelector(
      `[data-item='${cellsArray[randomID]}']`
    );
    computerGuess.textContent = '0';
    checkArrayHuman();
    if (winnerDiv.textContent === 'YOU WON') {
      return;
    }
    checkArrayComp();
    cellsArray.splice(
      cellsArray.indexOf(
        +computerGuess.dataset.item
      ),
      1
    );
  }
}
gridContainer.addEventListener('click', tictac);
