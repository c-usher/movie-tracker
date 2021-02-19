const { Schema, model } = require('mongoose');

const listSchema = new Schema({
	poster: String,
	title: String,
	type: String,
	year: String,
	imdbID: String,
	comments: String
});

module.exports = model('List', listSchema);
