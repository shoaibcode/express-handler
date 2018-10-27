const cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_ID,
  api_secret: process.env.API_SECRET
})
