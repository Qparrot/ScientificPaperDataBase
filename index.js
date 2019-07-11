// document.getElementById("searchButton").addEventListener('click', getScientificPaper);

function getScientificPaper()
{
	event.preventDefault();
	fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json')
  		.then(response => response.json())
  		.then(json => console.log(json))
}
