const suggestions = [
  "Drink water but judge the cup choice",
  "Clean one spoon and stop",
  "Open your notes app and write exactly one sentence",
  "Apply to a job and immediately close the tab",
  "Sit on the floor like you’re rebooting",
  "Check your bank account and say ‘interesting’",
  "Stretch your neck like you’ve been typing for 12 hours",
  "Put on a song and pretend it’s your life soundtrack",
  "Delete one unread email",
  "Make eye contact with yourself in the mirror",
  "Stand up, sigh loudly, sit back down",
  "Text someone ‘thinking of you’ and disappear",
  "Rearrange items on your desk for 2 minutes",
  "Google a question you’re embarrassed to ask",
  "Drink something warm like it’s medicinal",
  "Close all your tabs and feel fear",
  "Rename one file properly",
  "Wash your face and do nothing else",
  "Walk to the window and stare dramatically",
  "Breathe in for 4, out for 6 — twice",
  "Organize your phone apps emotionally",
  "Throw away one useless thing",
  "Stand in silence and reset",
  "Open your calendar and forgive yourself",
  "Put your phone face down for 5 minutes",
  "Fix your posture like someone’s watching",
  "Do one task you’ve been avoiding for 3 minutes only",
  "Pretend you’re being interviewed about today",
  "Give yourself credit for surviving",
  "Refill your water even if it’s still half full",
  "Sit somewhere different",
  "Say ‘okay’ and start anyway",
  "Check the weather even though you’re not going out",
  "Make your bed aggressively",
  "Delete one screenshot",
  "Clap once and move on",
  "Start something badly",
  "Write a to-do list and ignore it",
  "Stand up and stretch your arms like a cat",
  "Do one thing Future You won’t hate",
  "Look at the ceiling and think of nothing",
  "Change your socks",
  "Open a random app and immediately close it",
  "Pretend this is a turning point",
  "Organize your thoughts by not organizing them",
  "Touch something cold",
  "Lower your shoulders",
  "Breathe like you mean it",
  "Say ‘I’m allowed to go slow’",
  "Reboot your brain",
  "Put one thing back where it belongs",
  "Drink water dramatically",
  "Sit still for 30 seconds",
  "Decide today counts",
  "Text someone an inside joke",
  "Rename today as a ‘soft day’",
  "Stand up and announce ‘next’",
  "Close your eyes and unclench your jaw",
  "Clean one surface only",
  "Forgive yourself retroactively",
  "Pick one tiny win",
  "Do the bare minimum proudly",
  "Pretend you’re the main character",
  "Look outside like you’re in a movie",
  "Write one sentence for future you",
  "Pause before the next scroll",
  "Take a breath like it matters",
  "Stand up slowly like you’re important",
  "Touch the ground",
  "Check in with your body",
  "Say ‘we move’",
  "Do one small responsible thing",
  "Start and stop — that still counts",
  "Drink water again",
  "Accept where you are",
  "Take up space",
  "Finish something tiny",
  "Sit quietly and exist",
  "Decide you’re doing enough",
  "Let today be imperfect",
  "Move one inch forward",
  "Stay"
];

// DOM
const suggestionEl = document.getElementById("suggestion");
const generateBtn = document.getElementById("generateBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const shareBtn = document.getElementById("shareBtn");
const darkBtn = document.getElementById("darkBtn");
const meta = document.getElementById("meta");

const modal = document.getElementById("favoritesModal");
const favoritesList = document.getElementById("favoritesList");
const viewFavoritesBtn = document.getElementById("viewFavoritesBtn");
const closeModalBtn = document.getElementById("closeModal");

let lastSuggestion = null;

// Load dark mode
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

// Generate
generateBtn.addEventListener("click", () => {
  const random =
    suggestions[Math.floor(Math.random() * suggestions.length)];
  lastSuggestion = random;
  suggestionEl.textContent = random;
  generateBtn.textContent = "Again";
});

// Favorite
favoriteBtn.addEventListener("click", () => {
  if (!lastSuggestion) return;

  const favs = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favs.includes(lastSuggestion)) {
    favs.push(lastSuggestion);
    localStorage.setItem("favorites", JSON.stringify(favs));
    meta.textContent = "Saved to favorites ⭐";
    meta.classList.remove("hidden");

    setTimeout(() => meta.classList.add("hidden"), 2000);
  }
});

// Share
shareBtn.addEventListener("click", () => {
  if (!lastSuggestion) return;
  navigator.clipboard.writeText(lastSuggestion);
  meta.textContent = "Copied to clipboard 🔗";
  meta.classList.remove("hidden");
  setTimeout(() => meta.classList.add("hidden"), 2000);
});

// Dark mode
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
});

// View favorites
viewFavoritesBtn.addEventListener("click", () => {
  favoritesList.innerHTML = "";
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];
  favs.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    favoritesList.appendChild(li);
  });
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

