const fact = document.querySelector('.fact')
const button = document.querySelector('.btn')

const getQuote = async ()=>{
    const response = await fetch('https://api.quotable.io/random')
    const json = await response.json()  
    return json
}

button.addEventListener('click', ()=>{
    getQuote().then(quote => fact.innerHTML = `<p>${quote.content} &mdash; ${quote.author}</p>`)
})


