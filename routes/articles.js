const axios = require('axios');
require('dotenv').config()

// API routes to get, post, and delete articles
router.get('/api/articles', function(request, response){

	axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
		params: {
			"api-key": process.env.NYT_API_KEY,
			"q": "Obama",
			"begin_date": 19910101
		}
	}
	})
  		.then(function (response) {
    	console.log(response);
  	})
  		.catch(function (error) {
    	console.log(error);
  	});
})
