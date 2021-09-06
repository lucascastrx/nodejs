const express = require('express')
const app = express()

// a template engine sera o ejs
app.set('view engine', 'ejs')
app.use(express.static('public/css'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/perguntar', (req, res) => {
  res.render('perguntar')
})

app.get('/foo', function (req, res) {
  res.send('Hello world')
})

app.get('/git', (req, res) => {
  res.send(
    '<a href="https://www.github.com/lucascastrx" target="_blank" > Link github </a>'
  )
})

app.get('/instagram/:user?', (req, res) => {
  let name = req.query['name']

  res.send(
    `<a href="https://www.instagram.com/${req.params.user}" target="_blank"> ${name} </a>`
  )
})

app.listen(8080, function (e) {
  if (e) console.log('Erro')

  console.log('Server de pé!')
})
