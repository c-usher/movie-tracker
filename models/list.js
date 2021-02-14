const { Schema, model } = require('mongoose');

const listSchema = new Schema({
	title: String,
	movie: {
		poster: String,
		title: String,
		type: String,
		year: String,
		imdbID: String
    },
    review: String
});

module.exports = model('list', listSchema);
