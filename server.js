const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const cloudinary = require('cloudinary')
const mongoose = require('mongoose')

require('./mongo.js')
require('./model/Blog')

require('./handlers/cloudinary')
const upload = require('./handlers/multer')
const Blog = mongoose.model('Blog')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/blogs', async (req, res) => {
  const blogs = await Blog.find({})
  res.render('blogs', {
    blogs
  })
})

app.post('/create_blog', upload.single('image'), async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.file.path)
  const blog = new Blog()
  blog.title = req.body.title
  blog.imageUrl = result.secure_url
  await blog.save()
  res.send({
    message: 'Blog is Created'
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

const PORT = 7777
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})
