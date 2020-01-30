function bubbleSort(numList) {
  for (let i = 0; i < numList.length; i++) {
    for (let j = 0; j < numList.length - i; j++) {
      if (numList[j] > numList[j + 1]) {
        let swap = numList[j + 1];
        numList[j + 1] = numList[j];
        numList[j] = swap;
      }
    }
  }

  console.log(numList);
}

const a = [5, 1, 4, 2, 8];

bubbleSort(a);
