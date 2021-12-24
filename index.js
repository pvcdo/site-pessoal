const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials/"], // isso indica que usaremos o partials para criar componentes no node e mostra a localização dos documentos que especificam estes componentes
});

app.use(express.static('public'))

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/about',(req,res)=>{
  res.render('about')
})

app.get('/blog',(req,res)=>{
  res.render('blog')
})

app.get('/contact',(req,res)=>{
  res.render('contact')
})

app.get('/docs',(req,res)=>{
  res.render('docs')
})

app.get('/projects',(req,res)=>{
  res.render('projects')
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,() => {
    console.log('App rodando perfeitamente na porta 3000!')
})

