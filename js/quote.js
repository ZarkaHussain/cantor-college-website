// List of random quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is what happens when you're busy making other plans.",
    "It is never too late to be what you might have been.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
  ];
  
  // Function to update the quote
  function updateQuote() {
    // Get a random quote and display it
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteDisplay').textContent = `"${randomQuote}"`;
    document.getElementById('quoteDisplay').style.display = 'block';
  }
  
  // Set an interval to change the quote every 3 seconds (3000ms)
  setInterval(updateQuote, 2500);
  
  // Initially display the first quote
  updateQuote();
  