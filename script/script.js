// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui
//  l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri,
//  basta che ne indovini il più possibile.
const numbers = [];
const userNumbers = [3, 4, 5, 6, 7];


while (numbers.length < 5) {
  const num = Math.floor(Math.random() * 10) + 1;
  if (numbers.includes(num) === false) numbers.push(num); 
}
console.log(`numeri random: ${numbers}`, `numeri user: ${userNumbers}`);


for (let i = 0; i < userNumbers.length; i++) {
  if (numbers.includes(userNumbers[i])) {
    const guessed = userNumbers[i];
    console.log(`numero indovinato: ${userNumbers[i]}`);
    if (numbers[i] === guessed) {
      console.log("posizione giusta");
    }
    else {
      console.log("posizone sbagliata");
    }
  }
}



