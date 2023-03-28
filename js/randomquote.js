function generateQuote() {
    const quotes = [
        {
            quote: "This is my first quote.",
            author: "Me"
        }, 
        {
            quote: "This is my second quote.",
            author: "Me"
        }, 
        {
            quote: "This is my third quote.",
            author: "Me"
        }, 
        {
            quote: "This is my fourth quote.",
            author: "Me"
        }, 
        {
            quote: "This is my fifth quote.",
            author: "Me"
        }
    ];

    let currentQuote = math.floor(Math.random() * quotes.length);
    //console.log(currentQuote)
    
    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = "-" + quotes[currentQuote].author;

}

window.onload = function() {
    generateQuote();
    document.getElementById('generate').addEventListener('click', generateQuote);
}

generateQuote();