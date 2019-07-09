document.getElementById("search").addEventListener('submit', getScientificPaper);

function getScientificPaper()
{
	console.log("hahh");
	fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]', {
		method: 'GET',
		mode: 'cors'})
		.then(res => console.log(res))
		.catch(error => console.error(error));
	//		.then(data => console.log("two"));
}
