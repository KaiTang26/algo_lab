const resultTable = {};
function FB(n) {
  if (n <= 2) {
    resultTable[n] = 1;
    return 1;
  }

  if (!resultTable[n]) {
    let val = FB(n - 1) + FB(n - 2);
    resultTable[n] = val;
    return val;
  } else {
    return resultTable[n];
  }
}
FB(30);
console.log(resultTable);
