// - Show the user 4 random numbers between 1 and 100 ****
// Create Function called randomNumber
// create random number variable
// return random number
function randomNumber() {
  let number = Math.floor(Math.random() * 100);
  return number;
}

function guess(numbers) {
  for (i = 0; i < numbers.length; i++) {
    guess[i] = Number(prompt("What is your first guess from 1 to 100"));
    if (numbers[i] === guess[i]) {
      alert("You guess all correctly");
    } else {
      alert("Try again");
    }
  }
}

let numbers = [randomNumber(), randomNumber(), randomNumber(), randomNumber()];
alert(`Here are you 4 numbers to remeber ${numbers}`);
setTimeout(guess(numbers), 15000);

// - After 15 seconds, ask them to enter each number in order ****
// Create function guess
// timeout
// prompt user for guess 1
// prompt user for guess 2
// prompt usre for guess 3
// store prompt guesses into an array
// for loop through guesss
// check with if statment for if correct
// if guess is correct alert user
// else tell user they are wrong
// - Let them know how many they got right! ****
