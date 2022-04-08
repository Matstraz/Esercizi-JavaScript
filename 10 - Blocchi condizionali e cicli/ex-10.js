let somma = 0

function sumUntil(maxValue) {
    for(let i = 0; i < maxValue; i++){
    somma += i;
  }
  return somma + maxValue
}


console.log(sumUntil(5))

