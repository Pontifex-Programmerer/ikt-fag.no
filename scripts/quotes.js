const quotePopup = document.querySelector('#quotePopup');
const authorField = document.querySelector('#author');
const quoteField = document.querySelector('#quote');
const QUOTEDURATION = 20000;//Milliseconds..

const options = {
	method: 'GET',
    params: {category: 'all', count: '1'},
	headers: {
		'X-RapidAPI-Key': '2c5a3cf510msh930d2e4b688505ep179c13jsn69e5b98ff652',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options)
	.then(response => response.json())
	.then(response => {
        setQuote(response[0]);
    })
	.catch(err => console.error(err));

function setQuote(quoteObject){
    toggleQuoteVisibility();
    quoteField.innerHTML = quoteObject.text;
    authorField.innerHTML = quoteObject.author;
    setTimeout(()=> toggleQuoteVisibility(), QUOTEDURATION);
}

function toggleQuoteVisibility(){
    quotePopup.classList.toggle('invisible');
    quotePopup.classList.toggle('visible');
    
}