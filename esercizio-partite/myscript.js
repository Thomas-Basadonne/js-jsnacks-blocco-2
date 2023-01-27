// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte) [W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

const result = ["W", "W", "L", "X", "X", "W", "L", "X"];
let win = 0;
let lose = 0;
let draw = 0;

for (let i = 0; i < result.length; i++) {
  const risultati = result[i];
  if (risultati == "W") {
    win++;
    console.log(win);
  } else if (risultati == "L") {
    lose++;
    console.log(lose);
  } else if (risultati == "X") {
    draw++;
    console.log(draw);
  }
}
