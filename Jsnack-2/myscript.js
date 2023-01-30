const redTextEl = document.getElementById("text-red");
const greenTextEl = document.getElementById("text-green");

const numbers = [3, 12, 23, 32, 45, 16];

firstRed = true;
firstGreen = true;

for (let i = 0; i < numbers.length; i++) {
  const thisNumber = numbers[i];
  console.log(thisNumber);

  if (thisNumber % 2 == 0) {
    if (firstGreen) {
      greenTextEl.append(thisNumber);
    } else {
      greenTextEl.append(", " + thisNumber);
    }
    firstGreen = false;
  } else {
    if (firstRex) {
      redTextEl.append(thisNumber);
    } else {
      redTextEl.append(thisNumber + "");
    }
    redTextEl.append(", " + thisNumber);
  }
  firstRed = false;
}
