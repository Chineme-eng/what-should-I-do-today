const suggestions = [
  "Go for a short walk",
  "Clean one small area",
  "Drink a glass of water",
  "Listen to a new song",
  "Stretch for 5 minutes",
  "Write down one goal",
  "Text someone you miss",
  "Do absolutely nothing for 10 minutes"
];

const button = document.getElementById("generateBtn");
const suggestionText = document.getElementById("suggestion");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  suggestionText.textContent = suggestions[randomIndex];
});

