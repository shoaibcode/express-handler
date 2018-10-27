const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO)

mongoose.connection.once('open', () => {
  console.log(`Mongo is running`)
})
