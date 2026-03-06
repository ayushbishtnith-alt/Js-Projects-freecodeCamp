let count = 0;

function cardCounter(card) {

  if (card >= 2 && card <= 6) {
    count++;
  } 
  else if (card == 7 || card == 8 || card == 9) {
    count += 0;
  } 
  else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}