const suggestions = [
  // 🧠 Serious / Productive
  "Write down everything stressing you out, then close the notebook",
  "Apply to one job, even if you feel underqualified",
  "Clean exactly one drawer — not the whole room",
  "Organize your phone photos from just this month",
  "Set a 10-minute timer and work without stopping",
  "Check your bank balance without judging yourself",
  "Update your resume by one line",
  "Drink a full glass of water right now",
  "Take a shower and actually let the water hit your back",
  "Go outside and stand in the cold for 2 minutes",

  // 💛 Self-Care / Grounding
  "Sit on the floor and stretch your legs for 5 minutes",
  "Breathe in for 4 seconds, out for 6 — do this 5 times",
  "Light a candle and do nothing until it feels calm",
  "Put your phone face-down for 10 minutes",
  "Make your bed, even if the rest of the room is a mess",
  "Drink something warm slowly",
  "Wash your face with warm water",
  "Stand up and roll your shoulders",
  "Look out the window and name 5 things you see",
  "Close your eyes and unclench your jaw",

  // 🎈 Silly / Light
  "Put on a song and dramatically lip-sync it",
  "Spin around in a chair once",
  "Text someone a single emoji",
  "Google something completely useless",
  "Walk like a main character to the kitchen",
  "Make the ugliest face you can",
  "Pretend you’re in a movie montage",
  "Say 'I’m doing my best' out loud",
  "Dance for exactly 30 seconds",
  "Wave at yourself in a mirror",

  // 🤡 Unhinged / Fun
  "Name the next app you open like it’s a villain",
  "Act like you’re being interviewed about your life",
  "Give yourself a fake award for surviving today",
  "Narrate your actions in third person",
  "Decide what your alter ego would do right now",
  "Stare at the ceiling and think of nothing",
  "Clap once and move on with your life",
  "Stand up and announce 'next task'",
  "Open a random tab and immediately close it",
  "Sit very still and reboot your brain",

  // 🌱 Gentle Progress
  "Do one thing Future You will appreciate",
  "Write a to-do list and only do the first item",
  "Start something badly instead of not at all",
  "Tidy up for 3 minutes, then stop",
  "Send one honest message",
  "Think about where you want to be in 6 months",
  "Delete one app you don’t use",
  "Save $1 or write it down as a goal",
  "Put something back where it belongs",
  "Tell yourself today counts"
];

const button = document.getElementById("generateBtn");
const suggestionText = document.getElementById("suggestion");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  suggestionText.textContent = suggestions[randomIndex];
  button.textContent = "Again";
});

