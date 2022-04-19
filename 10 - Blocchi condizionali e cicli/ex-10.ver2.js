function sumUntil1(maxValue) {
  if (maxValue == 1){
    return 1;
  }else{
   return `${maxValue} + ${sumUntil1(maxValue - 1)}`
  }
}

function sumUntil2(maxValue) {
  if (maxValue == 1){
    return 1;
  }else{
    return maxValue + sumUntil2(maxValue - 1)
  }
}

function sumUntil(maxValue){
  return sumUntil1(maxValue) + ` = ${sumUntil2(maxValue)}`
}


console.log(sumUntil(5))
