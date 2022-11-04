const fact = document.querySelector('.quote')
const qAuthor = document.querySelector('.author')
const button = document.querySelector('.btn')
const tweet = document.querySelector('.twitter')
const message = 'via Quote Generator by @codingoncode'

const getQuote = async ()=>{
    const response = await fetch('https://api.quotable.io/random')
    const json = await response.json()  
    return json
}

tweet.addEventListener('click', ()=>{
  console.log('clicked!!')
})

button.addEventListener('click', ()=>{
   getQuote().then(quotes => {
      let quoteContent = quotes.content
      let quoteAuthor = quotes.author; 
      fact.textContent = quoteContent;
      qAuthor.textContent = quoteAuthor;
     tweet.href = `https://twitter.com/intent/tweet?text="${quoteContent}"%0D%0A%2D%20${quoteAuthor}%0D%0A%0D%0A${message}`
    });
  });