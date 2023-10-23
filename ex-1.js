let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  let arr=words.map((x) => x.length)
  
  return arr
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
