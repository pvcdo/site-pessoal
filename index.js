const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials/"], // isso indica que usaremos o partials para criar componentes no node e mostra a localização dos documentos que especificam estes componentes
});

const docs_route = require('./routes/docs/')

app.use(express.static('public'))

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use(express.json())

app.use('/docs',docs_route)

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.get('/about',(req,res)=>{
  const pagina = {
    about: true,
    active: 'active'
  }

  const certificados=[
    {
      id:1,
      titulo: 'React - States Effects',
      imagem: 'https://drive.google.com/uc?export=view&id=1Pd74LrQigrUry3Kc0MRlQKDKtM-i_iPG',
      descricao: 'Aprendi a trabalhar com os 2 principais hooks do React: useState e useEffects para criação de componentes ainda mais inteligentes.'
    },
    {
      id:2,
      titulo: 'React - States Effects',
      imagem: 'https://drive.google.com/uc?export=view&id=1Pd74LrQigrUry3Kc0MRlQKDKtM-i_iPG',
      descricao: 'Aprendi a trabalhar com os 2 principais hooks do React: useState e useEffects para criação de componentes ainda mais inteligentes.'
    },
    {
      id:3,
      titulo: 'React - States Effects',
      imagem: 'https://drive.google.com/uc?export=view&id=1Pd74LrQigrUry3Kc0MRlQKDKtM-i_iPG',
      descricao: 'Aprendi a trabalhar com os 2 principais hooks do React: useState e useEffects para criação de componentes ainda mais inteligentes.'
    },
  ]
  res.render('about', {pagina, certificados})
})

app.get('/blog',(req,res)=>{
  const pagina = {
    blog: true,
    active: 'active'
  }
  res.render('blog',{pagina})
})

app.get('/contact',(req,res)=>{
  const pagina = {
    contact: true,
    active: 'active'
  }
  res.render('contact',{pagina})
})

app.get('/projects',(req,res)=>{
  const pagina = {
    projects: true,
    active: 'active'
  }
  res.render('projects',{pagina})
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,() => {
    console.log('App rodando perfeitamente na porta 3000!')
})

