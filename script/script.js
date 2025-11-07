// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui
//  l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri,
//  basta che ne indovini il più possibile.
const num1 = document.querySelector(".first");
const num2 = document.querySelector(".second");
const num3 = document.querySelector(".third");
const num4 = document.querySelector(".fourth");
const num5 = document.querySelector(".fifth");
const form = document.querySelector("form");
const showNumsElem = document.querySelector(".numbers");
const countdownElem = document.querySelector(".countdown");
const resultElem = document.querySelector(".result");
const gameInstructions = document.querySelector(".game-instructions");
const boxElem = document.querySelector(".box");
const submitBtnElem = document.querySelector(".submit-btn");
const retryBtnElem = document.querySelector(".retry");

// DEBUG 
const userNumbers = [3, 4, 5, 6, 7];

const genRandomNums = () => {
  const nums = [];
  while (nums.length < 5) {
    const num = Math.floor(Math.random() * 10) + 1;
    if (nums.includes(num) === false) nums.push(num);
  }
  return nums
}
// console.log(`numeri random: ${numbers}`, `numeri user: ${userNumbers}`);

const check = (refNums, inputNums) => {
  let guessed = [];
  let guessCounter = 0;
  for (let i = 0; i < 5; i++) {
    if (refNums.includes(inputNums[i])) {
      guessed.push(inputNums[i]);
      guessCounter++;
    }
  }
  return `Hai indovinato ${guessCounter} Numeri (${guessed})`;
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
// const ex = [1, 1, 2, 3, 4, 4, 4, 6, 7];
// console.log(filterNumbers(ex));



const numbers = genRandomNums();
showNumsElem.innerHTML = numbers;

let count = 3;
let countdownEnd = false;
const intervalId = setInterval( () => {
  if (count === 0) {
    boxElem.classList.add("d-none");
    // showNumsElem.innerHTML = "";
    gameInstructions.innerHTML = "Scrivi i numeri che ricordi";
    // countdownElem.innerHTML = "";
    countdownEnd = true;
    clearInterval(intervalId);
  } else {
    countdownElem.innerHTML = count;
  }
  if (countdownEnd) form.classList.remove("d-none");
  count--;
}, 1000);

let sent = false;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const guesses = [];
  guesses.push(parseInt(num1.value), parseInt(num2.value), parseInt(num3.value), parseInt(num4.value), parseInt(num5.value));
  const filteredGuesses = filterNumbers(guesses);
  // console.log(numbers, guesses, check(numbers, filteredGuesses));
  resultElem.innerHTML = check(numbers, filteredGuesses);
  sent = !sent;
  if (sent) {
    submitBtnElem.classList.add("d-none");
    retryBtnElem.classList.remove("d-none");
  }
});



