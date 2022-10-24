import { fromEvent, Subject } from 'rxjs';
import WORDS_LIST from './wordsList.json';

const letterRows = document.getElementsByClassName('letter-row');

const onKeyDown$ = fromEvent(document, 'keydown');

let letterIndex = 0;
let letterRowIndex = 0;
let userAnswer = [];
const getRandomWord = () =>
  WORDS_LIST[Math.floor(Math.random() * WORDS_LIST.length)];
let rightWord = getRandomWord();
console.log(rightWord);
const userWinOrLoose$ = new Subject();

const insertLetter = {
  next: (event) => {
    //Filtro de forma vanilla
    const pressedKey = event.key.toUpperCase();
    if (pressedKey.length === 1 && pressedKey.match(/[a-z]/i)) {
      const letterBox =
        Array.from(letterRows)[letterRowIndex].children[letterIndex];
      letterBox.textContent = pressedKey;
      letterBox.classList.add('filled-letter');
      userAnswer.push(pressedKey);
      letterIndex++;
    }
  },
};

const deleteLetter = {
  next: (event) => {
    const pressedKey = event.key.toUpperCase();
    if (pressedKey === 'BACKSPACE') {
      letterIndex--;
      const letterBox =
        Array.from(letterRows)[letterRowIndex].children[letterIndex];
      letterBox.textContent = '';
      letterBox.classList.remove('filled-letter');
      userAnswer.pop();
    }
  },
};

const checkWord = {
  next: (event) => {
    const pressedKey = event.key.toUpperCase();
    if (pressedKey === 'ENTER') {
      if (userAnswer.join('') === rightWord) {
        userWinOrLoose$.next('win');
      }
    }
  },
};

onKeyDown$.subscribe(insertLetter);
onKeyDown$.subscribe(deleteLetter);
onKeyDown$.subscribe(checkWord);
userWinOrLoose$.subscribe(() => {
  let letterRowsWinned = Array.from(letterRows)[letterRowIndex];
  for (let i = 0; i < 5; i++) {
    letterRowsWinned.children[i].classList.add('letter-green');
  }
});
