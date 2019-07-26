// document.getElementById("searchButton").addEventListener('click', getScientificPaper);

function getScientificPaper()
{
	var date = '2008';
	event.preventDefault();
	fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+' + date + '[pdat]&retmode=json')
  		.then(response => response.json())
		.then(json1 => json1.esearchresult.idlist.forEach(function(item) {
				document.getElementById('main').innerHTML += item;
			fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=' + item + '&retmode=json', {
				mode: 'cors',
				headers: {
					// 'Access-Control-Allow-Origin': '*'
				}
			})
				.then(res => res.json())
				.then(json => {
					console.log(json);
					console.log(json.result.uids);
					document.getElementById('main').innerHTML += '<h2>' + json.result[item].title + '</h2>';})		
		}))
}
