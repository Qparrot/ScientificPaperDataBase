document.getElementById("search").addEventListener('submit', getScientificPaper);

function getScientificPaper()
{
	fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]')
		.then(res => console.log("aha"))
		.then(data => console.log("two"));
}
