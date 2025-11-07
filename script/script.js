// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui
//  l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri,
//  basta che ne indovini il più possibile.

// DEBUG 
const userNumbers = [3, 4, 5, 6, 7];

const genRandomNums = () => {
  const nums = [];
  while (nums.length < 5) {
    const num = Math.floor(Math.random() * 10) + 1;
    if (nums.includes(num) === false) numbers.push(num);
  }
  return nums
}
// console.log(`numeri random: ${numbers}`, `numeri user: ${userNumbers}`);

const check = (refNums, inputNums) => {
let guessed = "";
let guessCounter = 0;
for (let i = 0; i < 5; i++) {
  if (refNums.includes(inputNums[i])) {
    guessed += inputNums[i] + " ";
    guessCounter++;
  }
}
return `Hai indovinato ${guessCounter} Numeri ( ${guessed})`;
}

const numbers = genRandomNums();



