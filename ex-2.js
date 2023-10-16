let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.filter(function moreThan5(words){if(words.length>=5){return words}})
}

const result = get5CharWords(words);

console.log(result);