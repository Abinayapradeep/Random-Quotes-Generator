const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", author: "Unknown" },
  { text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.", author: "Steve Jobs" },
  { text: "Experience is a hard teacher because she gives the test first, the lesson afterwards.", author: "Vernon Sanders Law" },
  { text: "To live is the rarest thing in the world. Most people just exist.", author: "Oscar Wilde" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');
const spinner = document.getElementById('spinner');
const btnText = document.getElementById('btn-text');

newQuoteBtn.addEventListener('click', () => {
  spinner.style.display = 'inline-block';
  btnText.textContent = 'Generating...';
  newQuoteBtn.disabled = true;

  setTimeout(() => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.text === quoteText.textContent);

    quoteText.textContent = `"${newQuote.text}"`;
    quoteAuthor.textContent = `— ${newQuote.author}`;

    spinner.style.display = 'none';
    btnText.textContent = 'Generate New Quote';
    newQuoteBtn.disabled = false;
  }, 400);
});
