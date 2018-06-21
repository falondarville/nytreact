var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
	title: {
	 	type: String,
	 	unique: true
	},
	date: {
		type: String
	},
	url: {
		type: String
	}
});

module.exports = mongoose.model('Article', ArticleSchema);