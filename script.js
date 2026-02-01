const activities = [
    "Ideate a new AI tool for Picao",
    "Record a 60-second build update",
    "Optimize your GitHub README",
    "Take a 15-minute screen break",
    "Reach out to one potential user",
    "Write a new feature spec",
    "Sketch a logo variation"
];

let favorites = JSON.parse(localStorage.getItem('picao-favs')) || [];

const mainBtn = document.getElementById('main-btn');
const activityText = document.getElementById('activity-text');
const favBtn = document.getElementById('fav-btn');

// 1. GET RECOMMENDATION
mainBtn.addEventListener('click', () => {
    mainBtn.disabled = true;
    activityText.style.opacity = 0.5;
    activityText.innerText = "Thinking...";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * activities.length);
        const choice = activities[randomIndex];
        
        activityText.innerText = choice;
        activityText.style.opacity = 1;
        mainBtn.disabled = false;
        mainBtn.innerText = "Tell me again";
    }, 600);
});

// 2. FAVORITES LOGIC
favBtn.addEventListener('click', () => {
    const currentActivity = activityText.innerText;
    if (currentActivity && currentActivity !== "Ready to start your day?" && !favorites.includes(currentActivity)) {
        favorites.push(currentActivity);
        localStorage.setItem('picao-favs', JSON.stringify(favorites));
        alert("Added to favorites!");
    }
});

// 3. THEME TOGGLE (Simulated)
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // You can add specific light-mode CSS variables later!
});
