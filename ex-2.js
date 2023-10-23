let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  let arr=words.filter((x) => x.length>=5)
  return arr
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
