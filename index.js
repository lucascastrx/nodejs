const express = require('express')
const connection = require('./database/database')
const perguntaModel = require('./database/Pergunta')
const app = express()
// const bodyParser = require('body-parser')

connection
  .authenticate()
  .then(e => {
    console.log('Conexao realizada')
  })
  .catch(e => {
    console.log(e)
  })

// a template engine sera o ejs
app.set('view engine', 'ejs')
app.use(express.static('public/css'))
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  perguntaModel
    .findAll({ raw: true, order: [['id', 'DESC']] })
    .then(perguntas => {
      res.render('index', {
        perguntas: perguntas
      })
    })
})

app.get('/perguntar', (req, res) => {
  res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
  const titulo = req.body.titulo
  const descricao = req.body.descricao
  perguntaModel
    .create({
      titulo: titulo,
      descricao: descricao
    })
    .then(e => {
      res.redirect('/')
    })
})

app.get('/pergunta/:id', (req, res) => {
  const id = req.params.id
  perguntaModel
    .findOne({
      where: { id: id }
    })
    .then(pergunta => {
      if (pergunta != undefined) {
        res.render('pergunta', {
          pergunta: pergunta
        })
      } else {
        res.redirect('/')
      }
    })
})

app.listen(8080, function (e) {
  if (e) console.log('Erro')

  console.log('Server de pé!')
})
