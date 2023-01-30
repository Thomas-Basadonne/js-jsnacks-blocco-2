// JSnack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const myArray = [10, 32, 15, 24, 33, 11, 99];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
  if (i % 2 !== 0) {
    sum += myArray[i];
  }
}

console.log(sum);
