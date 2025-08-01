
// List of strings
const words = ["apple", "dog", "banana", "sun", "elephant", "car"];

// Filter and transform
const longWordsUpper = words
  .filter(word => word.length >= 5)
  .map(word => word.toUpperCase());

// Output to console
console.log("Transformed words:", longWordsUpper);

// Output to the webpage
const outputElement = document.getElementById("output");
longWordsUpper.forEach(word => {
  const li = document.createElement("li");
  li.textContent = word;
  outputElement.appendChild(li);
});
