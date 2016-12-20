// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Quotes dataset to be called by the getRandomQuote function
var quotes = [
	{ 
	quote: "Don't cry because it's over, smile because it happened",
	source: "Dr. Seuss ",
	citation: " Unknown",
	year: "unknown",
	tags: "humor"
	},
    {
	quote: "Accept the challenges so that you can feel the exhilaration of victory.",
	source: " General George S. Patton",
	citation:"Textbook of Phacoemulsification",
	year:"1885-1945",
	tags: "motivation"
	},
	
	{
	quote: "We're all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness",
	source: " Robert Fulghum ",
	citation:"True Love ",
	year:"1998",
	tags: "motivation"
	},
	{
	quote:"Do what you feel in your heart to be right, for you’ll be criticized anyway.",
	source: "Dale Carnegie",
	citation:"How to Stop Worrying and Start Living ",
	year:"1944; 1948",
	tags: "inspiration"
	},
		{
	quote: "To find yourself, think for yourself",
	source: " Socrates",
	citation:" The Apology",
	year:"469 BC - 399 BC",
	tags: "motivation"
	}
			
];
	

function getRandomQuote (){//creates the var theQuote to create randomness for the quote to display and return value for the printQuote
	"use strict";
	  var theQuote = Math.floor(Math.random() * (quotes.length));
    return quotes[theQuote];
	
		
		
	}




function printQuote(){// calls the get the GetRandomQuote function and changes the elements on the page to display the quote values from the quotes object values.
	"use strict"; 
	var selectedRandomQuote = getRandomQuote();
	document.getElementById('quote-box').innerHTML= '<p class="quote">' + selectedRandomQuote.quote + '</p>'+ 
	'<p class="source">' + selectedRandomQuote.source +
  '<span class="citation">' + selectedRandomQuote.citation + '</span>'+ '<span class="year">' + selectedRandomQuote.year + '</span>' + '<span class="tags">'+ " " +selectedRandomQuote.tags + '</span>' + '</p>';
	
	
	
	
}

