const mongoose = require("mongoose");

// schema
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
