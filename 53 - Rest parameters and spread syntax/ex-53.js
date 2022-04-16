function sum(num1, ...numX) {
    otherValues = numX.reduce((sum, current) => sum + current, 0);
    return num1 + otherValues;
}

console.log(sum(1, 2, 3, 4, 5));


