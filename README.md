#Sc. Paper Database

##Goal
	create a website that that show scientific papers and is free for everyone. The goal is to use free peer review.

##Log
-(04.07.2019): Start the project.
	Create a first html and the js to host the fetch request.
-(05.07.2019): Try to get more information about the API and how to get the data.
-(08.07.2019): Learn RESTFUL API with openclassroom. 
-(09.07.2019): 	- I now know that the js is running but not working.
		- I should try to use a server side to do get of the API...
-(10.07.2019): 	- I tried with another API. I have the same issue with randomusers and jsonplaceholders.
		- I tried without the form it is now working properly... I don't know why.e 
## Difficulties
-(04.07.2019): I don't know how to implement the "PubMed API method:GET".
	A(09.07.2019): Help from Jonathan: He recommended me to implement in it a console.log('test') in order to check if the function is launch... It wasn't ... 
LEARN DEBUGGING SKILLS !!! Then I got a error: "TypeError: NetworkError when attempting to fetch resource."
-(10.07.2019): 	- Sometime the GET request in the form is working( 1 out of 12 times). why?
		- Without the form sometimes (1 out of 8 times) I have this error message: "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).". Why?
## to Dig into:
_(link 3)_
DEBUGGING SKILLS.
## to learn:
(-) working with external API.
(-) Learn about the PubMed API.
(-) haboop.
(-) Postman.
(-) esearch & efetch.
(-) CORS. _(link 27, 28, 29, 30)_

##Links
1. **API request:** https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]
2. **How to get or fetch button click event listener using javascript or jquery:** https://stackoverflow.com/questions/37964593/how-to-get-or-fetch-button-click-event-listener-using-javascript-or-jquery#37965608
3. **Solr vs Elasticsearch:** http://solr-vs-elasticsearch.com/
4. **hadoop:** http://hadoop.apache.org/
5. **Can a html button perform a POST request?:**https://stackoverflow.com/questions/16036041/can-a-html-button-perform-a-post-request
6. **Searching on pubmed:** https://marcobonzanini.com/2015/01/12/searching-pubmed-with-python/
7. **fetch and AddListener:** https://stackoverflow.com/questions/44440532/fetch-and-addeventlistener
8. **hacking the pubmed api:** https://fredtrotter.com/2014/11/14/hacking-on-the-pubmed-api/
9. **PubMed:** https://www.ncbi.nlm.nih.gov/pubmed
10. **Sci-Hub:** https://www.sci-hub.tw/
11. **Start your own search engine:** https://www.pcastuces.com/pratique/internet/creer_moteur_recherche/page1.htm
12. **Github on the PubMed API:** https://github.com/robertaboukhalil/pubmed
13. **Working with external API:** https://www.theodinproject.com/courses/ruby-on-rails/lessons/working-with-external-apis
14. **Mozilla dev - Fetch API:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
15. **Postman:** https://www.getpostman.com/
16. **Interchu-omop:** https://framagit.org/interchu
17. **Emily Hurst - health sciences - PubMed Alternatives:** https://guides.library.vcu.edu/prf.php?account_id=33382
18. **Documentation - PubMed API Home:** https://www.ncbi.nlm.nih.gov/home/develop/api
19. **Documentation - PubMed API research article:** https://www.ncbi.nlm.nih.gov/books/NBK25500/
20. **GitHub - PunMedSquare:** https://github.com/loopasam/PubMedSquare
21. **GitHub - Package PubMed:** https://github.com/mikedonnici/pubmed
22. **GitHub - PubMed mit PHP:** https://github.com/jatejera/PubMed
23. **GitHub - Pudmed mit heroku:** https://github.com/smspillaz/pubmed-retraction-analysis
24. **GitHub - PubMed Watcher:** https://github.com/loopasam/pubmed-watcher
25. **GitHub - PubMed Vizualization SOCR:** https://github.com/SOCR/pubmed-vis
26. **Article - SQL vs MongoDB:** https://www.educba.com/mongodb-vs-sql/
27. **The connection used to fetch this resource was not secure:** https://support.mozilla.org/en-US/questions/1174965
28. **CORS for dev:** https://w3c.github.io/webappsec-cors-for-developers/
29. **Get request with fetch is not working because of CORS:** https://stackoverflow.com/questions/48051756/angular-2-simple-get-request-to-external-api-blocked-for-cors-but-got-200-in-ne
30. **TypeError: NetworkError when attempting to fetch resource - firefox issue :** https://github.com/github/fetch/issues/310
31. **fetch don;t show answer:** https://stackoverflow.com/questions/46417703/fetch-api-with-no-cors-redirect-cant-get-any-response-headers
32. **Using Fetch:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
33. **Using CORS:** https://www.html5rocks.com/en/tutorials/cors/#toc-making-a-cors-request
34. **how to do Cross domian request:** https://znlive.com/how-web-api-solves-common-problems-in-cross-domain-requests
35. **Enabling CORS on NODE.js:** https://dzone.com/articles/cors-in-node

