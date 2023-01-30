const numberA = [10, 32, 15, 24, 33, 11, 99];

const numberB = [24, 99];

let lessElementList;
let moreElementList;

if (numberA.length > numberB.length) {
  moreElementList = numberA;
  lessElementList = numberB;
} else {
  moreElementList = numberB;
  lessElementList = numberA;
}

const differenceBetweenList = moreElementList.length - lessElementList.length;

for (let i = 0; i < differenceBetweenList; i++) {
  lessElementList.push(Math.floor(Math.random() * 100) + 1);
}

console.log("lunghezza lista lunga " + moreElementList.length);
console.log("lunghezza lista corta " + lessElementList.length);
