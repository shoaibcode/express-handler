const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Title is Required'
  },
  imageUrl: {
    type: String
  }
})

module.exports = mongoose.model('Blog', blogSchema)
