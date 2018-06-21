const axios = require('axios');
const express = require('express');
const router = express.Router();
var article = require('./../models/article')

// API routes to get, post, and delete articles
router.get('/api/nyt', function(request, response){

	var topic = request.query.topic;
	var startYear = request.query.startYear + "0101"
	var endYear = request.query.endYear + "1231"

	axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
		params: {
			"api-key": process.env.NYT_API_KEY,
			"q": topic,
			"begin_date": startYear,
			"end_date": endYear
		}
	})
  		.then(function (res) {
  		var articles = [];

  		for(var i = 0; i < 5; i++){
  			articles.push(res.data.response.docs[i]);
  		} 
		response.json({data: articles});
		console.log(res.data);
  	})
  		.catch(function (error) {
    	console.log(error);
    	console.log(error.response.data);
	});
})

router.get('/api/articles', function(request, response){
	article.find({}, function(error, articles){
		response.json({articles});
	});
})

router.post('/api/articles', function(request, response){

	// save data from the article pulled from the NYT API
	response.json(request.body);
	article.create({
		title: request.body.headline.main,
		date: request.body.pub_date,
		url: request.body.web_url
	}, function(error){
		console.log('inserting into mongodb');
		console.log(error);
	})
});

router.delete('/api/articles/:id', function(request, response){

	// delete saved article from the database
	console.log(request.body.url);
	article.deleteOne({
		_id: request.params.id
	}, function(error){
		console.log('deleting from mongodb');
		console.log(error);
	})
});

module.exports = router;
