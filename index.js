function getUniqueSymbol(text) {
  const words = text.split(/\s+|\W+/);
  const uniqueSymbolArr = [];

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const length = word.length;
    const counter = {};

    for (let i = 0; i < length; i += 1) {
      const letter = word[i];

      if (counter[letter]) {
        counter[letter] += 1;
      } else {
        counter[letter] = 1;
      }
    }

    for (let i = 0; i < length; i += 1) {
      const uniqueLetter = word[i];
      if (counter[uniqueLetter] === 1) {
        uniqueSymbolArr.push(uniqueLetter);
        break;
      }
    }
  }

  for (let i = 0; i < uniqueSymbolArr.length; i += 1) {
    const uniqueSymbol = uniqueSymbolArr[i];
    let isUnique = true;

    for (let j = 0; j < uniqueSymbolArr.length; j += 1) {
      if (i !== j && uniqueSymbol === uniqueSymbolArr[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      return uniqueSymbol;
    }
  }

  return null;
}

const text =
  "The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, 'The Tao of Programming'";

console.log(getUniqueSymbol(text));
