// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui
//  l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri,
//  basta che ne indovini il più possibile.

const numberImputs = document.querySelectorAll('.guess-form input[type="number"]');
const form = document.querySelector("form");
const showNumsElem = document.querySelector(".numbers");
const countdownElem = document.querySelector(".countdown");
const resultElem = document.querySelector(".result");
const gameInstructions = document.querySelector(".game-instructions");
const boxElem = document.querySelector(".box");
const submitBtnElem = document.querySelector(".submit-btn");
const retryBtnElem = document.querySelector(".retry");
const startBtn = document.querySelector(".start");

const genRandomNums = () => {
  const nums = [];
  while (nums.length < 5) {
    const num = Math.floor(Math.random() * 10) + 1;
    if (nums.includes(num) === false) nums.push(num);
  }
  return nums
}

const check = (refNums, inputNums) => {
  let guessed = [];
  for (let i = 0; i < 5; i++) {
    if (refNums.includes(inputNums[i])) {
      guessed.push(inputNums[i]);
    }
  }
  return `Hai indovinato ${guessed.length} Numeri (${guessed})`;
}

const filterNumbers = (numbers) => {
  const filteredNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (filteredNumbers.indexOf(numbers[i]) === -1) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}

const numbers = genRandomNums();
showNumsElem.innerHTML = numbers;

startBtn.addEventListener("click", () =>{
boxElem.classList.remove("d-none");
let count = 3;
let countdownEnd = false;
const intervalId = setInterval( () => {
  if (count === 0) {
    boxElem.classList.add("d-none");
    gameInstructions.innerHTML = "Scrivi i numeri che ricordi";
    countdownEnd = true;
    clearInterval(intervalId);
  } else {
    countdownElem.innerHTML = count;
  }
  if (countdownEnd) form.classList.remove("d-none");
  count--;
}, 1000);
});

let sent = false;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const guesses = [];
  for (let i = 0; i < numberImputs.length; i++) {
    guesses.push(parseInt(numberImputs[i].value));
  }
  const filteredGuesses = filterNumbers(guesses);
  resultElem.innerHTML = check(numbers, filteredGuesses);
  sent = !sent;
  if (sent) {
    submitBtnElem.classList.add("d-none");
    retryBtnElem.classList.remove("d-none");
  }
});



