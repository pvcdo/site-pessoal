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
  const pagina = {
    about: true,
    active: 'active'
  }
  res.render('about', {pagina})
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

app.get('/docs',(req,res)=>{
  const pagina = {
    docs: true,
    active: 'active'
  }
  res.render('docs',{pagina, layout: 'docs'})
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

