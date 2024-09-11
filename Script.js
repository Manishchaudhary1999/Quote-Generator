// Quotes Data
const quotes = [
    { text: "Science is a way of thinking much more than it is a body of knowledge.", author: "Carl Sagan", category: "science" },
    { text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.", author: "Albert Einstein", category: "science" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "life" },
    { text: "Get busy living or get busy dying.", author: "Stephen King", category: "life" },
    { text: "I think fearless is having fears but jumping anyway.", author: "Taylor Swift", category: "fear" },
    { text: "Always do what you are afraid to do.", author: "Salvador Dali", category: "fear" },
    { text: "The trust of the innocent is the liar's most useful tool.", author: "Stephen King", category: "trust" },
    { text: "Love all, trust a few, do wrong to none. ", author: "William Shakespeare", category: "trust" },
    { text: "I came, I saw, I conquered.", author: "Julius Caesar", category: "history" },
    { text: "we are not makers of history.we are made by history", author: "Martin Luther King,Jr.", category: "history" },
];
const trust = ["The trust of the innocent is the liar's most useful tool."];
let currentIndex = 0;
let currentCategory = 'all';

// Display Quote
function displayQuote(index) {
    const quotes = getFilteredQuotes(currentCategory);
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const quote = quotes[index];
    quoteElement.textContent = quote.text;
    authorElement.textContent = quote.author ;
}

// Filter Quotes by Category
function getFilteredQuotes(category) {
    if (category === 'all') return quotes;
    return quotes.filter(quote => quote.category === category);
}

// Event Listeners
document.getElementById('next-quote').addEventListener('click', function () {
    const filteredQuotes = getFilteredQuotes(currentCategory);
    currentIndex = (currentIndex + 1) % filteredQuotes.length;
    displayQuote(currentIndex);
});

document.getElementById('prev-quote').addEventListener('click', function () {
    const filteredQuotes = getFilteredQuotes(currentCategory);
    currentIndex = (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayQuote(currentIndex);
});

document.getElementById('random-quote').addEventListener('click', function () {
    const filteredQuotes = getFilteredQuotes(currentCategory);
    currentIndex = Math.floor(Math.random() * filteredQuotes.length);
    displayQuote(currentIndex);
});

document.getElementById('category').addEventListener('change', function () {
    currentCategory = this.value;
    currentIndex = 0;
    displayQuote(currentIndex);
});

document.getElementById('increase-font').addEventListener('click', function () {
    const quoteElement = document.getElementById('quote');
    const currentSize = window.getComputedStyle(quoteElement).fontSize;
    quoteElement.style.fontSize = (parseFloat(currentSize) + 2) + 'px';
});

document.getElementById('decrease-font').addEventListener('click', function () {
    const quoteElement = document.getElementById('quote');
    const currentSize = window.getComputedStyle(quoteElement).fontSize;
    quoteElement.style.fontSize = (parseFloat(currentSize) - 2) + 'px';
});

document.getElementById('dark-mode').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});

// Initial Display
displayQuote(currentIndex);