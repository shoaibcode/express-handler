const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index', {
    blogs: [{ name: 'Hello' }, { name: 'World' }, { name: 'hi' }]
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

const PORT = 7777
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})
