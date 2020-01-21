const letterCombinations = function(digits) {
  const letterMap = {
    "1": [],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  const results = [];

  if (digits) {
    helper("", 0);
  }

  function helper(com, count) {
    if (count === digits.length) {
      results.push(com);
      return;
    }

    for (let i = 0; i < letterMap[digits[count]].length; i++) {
      helper(com + letterMap[digits[count]][i], count + 1);
    }
  }

  return results;
};

console.log(letterCombinations(""));
