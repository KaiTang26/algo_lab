const slidingWindow = (s: string, n: number) => {
  const subStringList = [];

  for (let i = 0; i < s.length; i++) {
    const subString = s.substring(i, i + n);
    if (subString.length === n) {
      subStringList.push(subString);
    }
  }

  console.log(subStringList);
};

slidingWindow("abcdefgh", 3);
