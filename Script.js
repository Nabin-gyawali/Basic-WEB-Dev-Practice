// Array of quotes
const quotes = [
    "I am Iron Man.",
    "Sometimes you gotta run before you can walk.",
    "Genius, billionaire, playboy, philanthropist.",
    "If we can’t accept limitations, we’re no better than the bad guys.",
    "It's not about how much we lost. It's about how much we have left.",
    "Following’s not really my style.",
    "I love you 3000.",
    "It’s an imperfect world, but it’s the only one we got. I guarantee you the day weapons are no longer needed to keep the peace, I’ll start making bricks and beams for baby hospitals.",
    "I saw young Americans killed by the very weapons I created to defend them and protect them. And I saw that I had become part of a system that is comfortable with zero accountability.",
    "Everybody wants a happy ending. Right? But it doesn’t always roll that way.",
    "What’s the point of owning a race car if you can’t drive it?"
];
let shuffledQuotes = [];
let index = 0;

function shuffleQuotes() {
    shuffledQuotes = [...quotes].sort(() => Math.random() - 0.5);
    index = 0; 
}

shuffleQuotes();

document.getElementById("quote-btn").addEventListener("click", function() {
    // Display the next quote
    document.getElementById("quote-display").innerHTML = 
        `${shuffledQuotes[index]} <br><br><span class="quote-author">- Tony Stark</span>`;

    index++;

    // If all quotes are shown, reshuffle
    if (index >= shuffledQuotes.length) {
        shuffleQuotes();
    }
});
