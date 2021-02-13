const { Schema, model } = require('mongoose');

const listSchema = new Schema(
    {
        title: String,
        body: String
    }
);


module.exports = model('list', listSchema);