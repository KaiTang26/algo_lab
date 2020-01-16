function binarySearch(numArray: number[], targetValue: number) {
  let startIndex = 0;
  let endIndex = numArray.length - 1;
  let middleIndex = Math.floor(numArray.length / 2);

  if (numArray[startIndex] === targetValue) {
    return startIndex;
  } else if (numArray[endIndex] === targetValue) {
    return endIndex;
  } else {
    while (numArray[middleIndex] !== targetValue && endIndex > startIndex) {
      // handle the value not in the range
      if (middleIndex === endIndex || middleIndex === startIndex) {
        break;
      }

      if (numArray[middleIndex] > targetValue) {
        endIndex = middleIndex;
      } else if (numArray[middleIndex] < targetValue) {
        startIndex = middleIndex;
      }

      middleIndex = Math.floor((endIndex + startIndex) / 2) + 1;
    }

    return numArray[middleIndex] === targetValue ? middleIndex : -1;
  }
}

const numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];

/*
three edge cases:
1: value in range but not include
2: value not in range
3: value is start and end of array

*/

console.log(binarySearch(numArray, 65));
