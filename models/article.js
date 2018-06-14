var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
	title: {
	 	type: String,
	 	unique: true
	},
	date: {
		// determine the type that this needs to be saved as. JSON for NYT API is returning this format for datetime: "pub_date": "1923-11-21T00:00:00Z"
		type: String
	},
	url: {
		type: String
	}
});

module.exports = mongoose.model('Article', ArticleSchema);