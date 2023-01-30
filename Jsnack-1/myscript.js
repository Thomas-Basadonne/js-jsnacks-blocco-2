const userNumber = parseInt(prompt("inserisci numero"));

if (!isNaN(userNumber)) {
  if (userNumber % 2 == 0) {
    console.log("Il mio numero è" + userNumber);
  } else {
    console.log("Il mio numero è" + userNumber + 1);
  }
} else {
  console.log("non hai inserito un numero :(");
}
