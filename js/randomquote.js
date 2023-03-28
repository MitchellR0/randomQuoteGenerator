function generateQuote() {
    const quotes = [
        {
            quote: "Think only of your art.",
            author: "Miyamoto Musashi"
        }, 
        {
            quote: "My whole thing is to inspire, to better people, to better myself forever in this thing that we call rap, this thing that we call hip hop.",
            author: "Kendrick Lamar"
        }, 
        {
            quote: "Never run back on what broke you.",
            author: "Frank Ocean"
        }, 
        {
            quote: "Aw, man, I shot Marvin in the face.",
            author: "Vincent Vega"
        }, 
        {
            quote: "I think I have this thing where I need everybody to think I'm the greatest.",
            author: "Fantastic Mr. Fox"
        }
    ];

    let currentQuote = Math.floor(Math.random() * quotes.length);
    console.log(currentQuote)
    
    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = "-" + quotes[currentQuote].author;

}

window.onload = function() {
    generateQuote();
    document.getElementById('generate').addEventListener('click', generateQuote);
}

generateQuote();