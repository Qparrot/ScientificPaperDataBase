// document.getElementById("searchButton").addEventListener('click', getScientificPaper);

function getScientificPaper()
{
	var ids = [];
	var arguments = (document.getElementById('arguments').value.split(' ').join('+'));
	event.preventDefault();
	fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=' + arguments + '&retmode=json')
  		.then(response => response.json())
		.then(json => {
			let i = 0;
			var search = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=';
			while(json.esearchresult.idlist[i])
			{
				document.getElementById('result').innerHTML = ''; 
				search += json.esearchresult.idlist[i];
				ids.push(json.esearchresult.idlist[i]);
				i++;
				if(json.esearchresult.idlist[i])
					search += ',';
			}
			fetch(search, {
				mode: 'cors'
			})
				.then(res => res.json())
				.then(json => {
					console.log(json);
					let i = 0;
					while(ids[i])
					{
						document.getElementById('result').innerHTML += '<div class="card card-body mb-3">';
						document.getElementById('result').innerHTML += '<h3>' + json.result[ids[i]].title + '</h3>';
						document.getElementById('result').innerHTML += '<p>' + json.result[ids[i]].pubdate + '</p>';
						document.getElementById('result').innerHTML += '</div>';
						i++;
					}
				})
	})
}
