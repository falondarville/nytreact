const axios = require('axios');
const express = require('express');
const router = express.Router();

// API routes to get, post, and delete articles
router.get('/api/articles', function(request, response){

	axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
		params: {
			"api-key": process.env.NYT_API_KEY,
			"q": "Obama",
			"begin_date": 19910101
		}
	})
  		.then(function (response) {
    	console.log(response);
  	})
  		.catch(function (error) {
    	console.log(error);
	});
})

router.post('/api/articles', function(request, response){

	// save data from the article pulled from the NYT API
});

router.delete('/api/articles', function(request, response){

	// delete saved article from the database
});

module.exports = router;
