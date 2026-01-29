const suggestions = {
  serious: [
    "Apply to one job you think you won’t get",
    "Check your bank balance without spiraling",
    "Clean one drawer only",
    "Update one line on your resume",
    "Write down what’s bothering you, then close the notebook",
    "Drink a full glass of water",
    "Set a 10-minute focus timer",
    "Organize files on your desktop",
    "Reply to one message you’ve been avoiding",
    "Go outside for fresh air"
  ],
  silly: [
    "Lip-sync dramatically to one song",
    "Narrate your life like a documentary",
    "Text someone one random emoji",
    "Spin around once and stop",
    "Pretend you’re in a movie montage",
    "Make the ugliest face possible",
    "Clap once and move on",
    "Walk like a main character",
    "Talk to yourself like a coach",
    "Give yourself a fake award"
  ]
};

// DOM
const suggestionText = document.getElementById("suggestion");
const button = document.getElementById("generateBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const modeSelect = document.getElementById("mode");
const dailyToggle = document.getElementById("dailyMode");
const meta = document.getElementById("meta");

// State
let clickCount = 0;
let lastSuggestion = null;

// Helpers
function getTodayKey() {
  return new Date().toDateString();
}

function getRandomSuggestion(mode) {
  if (mode === "random") {
    const all = [...suggestions.serious, ...suggestions.silly];
    return all[Math.floor(Math.random() * all.length)];
  }
  const list = suggestions[mode];
  return list[Math.floor(Math.random() * list.length)];
}

// Button click
button.addEventListener("click", () => {
  clickCount++;

  // One-per-day logic
  if (dailyToggle.checked) {
    const saved = JSON.parse(localStorage.getItem("dailySuggestion"));
    if (saved && saved.date === getTodayKey()) {
      suggestionText.textContent = saved.text;
      meta.textContent = "That’s today’s suggestion 🙂";
      return;
    }
  }

  const mode = modeSelect.value;
  const suggestion = getRandomSuggestion(mode);
  lastSuggestion = suggestion;

  suggestionText.textContent = suggestion;
  button.textContent = "Again";

  // Save daily
  if (dailyToggle.checked) {
    localStorage.setItem(
      "dailySuggestion",
      JSON.stringify({ date: getTodayKey(), text: suggestion })
    );
  }

  // Click feedback
  if (clickCount === 5) meta.textContent = "You seem curious.";
  if (clickCount === 10) meta.textContent = "Still looking, huh?";
  if (clickCount === 20) meta.textContent = "Okay, now you’re procrastinating.";

  // Animation
  suggestionText.classList.remove("flash");
  void suggestionText.offsetWidth;
  suggestionText.classList.add("flash");
});

// Favorites
favoriteBtn.addEventListener("click", () => {
  if (!lastSuggestion) return;

  const saved = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!saved.includes(lastSuggestion)) {
    saved.push(lastSuggestion);
    localStorage.setItem("favorites", JSON.stringify(saved));
    meta.textContent = "Saved to favorites ⭐";
  } else {
    meta.textContent = "Already favorited.";
  }
});
