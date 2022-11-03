const fact = document.querySelector('.fact')
const qAuthor = document.querySelector('.author')
const button = document.querySelector('.btn')
const tweet = document.querySelector('.twitter')

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
      const quoteContent = quotes.content
      const quoteAuthor = quotes.author;    
      fact.textContent = quoteContent;
     qAuthor.textContent = quoteAuthor;
    });
  });