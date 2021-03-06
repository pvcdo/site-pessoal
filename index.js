const express = require('express')
const exphbs = require('express-handlebars')
const fs = require('fs')
const path = require('path')
const axios = require('axios')

const port = process.env.PORT || 3000

const app = express()

const hbs = exphbs.create({
  partialsDir: ["views/partials/"], // isso indica que usaremos o partials para criar componentes no node e mostra a localização dos documentos que especificam estes componentes
});

const docs_route = require('./routes/docs');

app.use(express.static('public'))

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.json())

app.use('/docs', docs_route)

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.get('/about', (req, res) => {
  const pagina = {
    about: true,
    active: 'active'
  }

  var certificados = []

  axios.get('https://site-pessoal.free.beeceptor.com/site-pessoal-paulo')
    .then(function (response) {
      let certs = response.data.certificados
      certs.forEach((certificado, i) => {
        //colocando id no certificado
        certificado.id = i

        // alterando o nome para tirar a extensão
        var nome = certificado.nome
        nome = nome.substring(0, nome.length - 4)
        certificado.nome = nome
        certificados.push(certificado)
      })
      res.render('about', { pagina, certificados })
    })
    .catch(e => {
      console.log('erro: ' + e.message)
    })
})

app.get('/blog', (req, res) => {
  const pagina = {
    blog: true,
    active: 'active'
  }
  res.render('blog', { pagina })
})

app.get('/contact', (req, res) => {
  const pagina = {
    contact: true,
    active: 'active'
  }
  res.render('contact', { pagina })
})

app.get('/projects', (req, res) => {
  const pagina = {
    projects: true,
    active: 'active'
  }
  res.render('projects', { pagina })
})

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App rodando perfeitamente na porta ${port}!`)
})

