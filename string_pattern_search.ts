const pattern_search = (s: stringPattern) => {
  const { longString, shortString } = s;

  let count = 0;

  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      if (shortString[j] !== longString[i + j]) {
        break;
      }

      if (j === shortString.length - 1) {
        count++;
      }
    }
  }

  return count;
};

type stringPattern = {
  longString: string;
  shortString: string;
};
/*
longString = 'asdfgh'
shortString = 'as'

return true;
*/

console.log(pattern_search({ longString: "aabcacabc", shortString: "abc" }));
