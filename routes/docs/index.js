const express = require('express')
const router = express.Router()

const path = require('path')

const viewsPath = path.join(__dirname,'../../views')

router.get('/nodejs', (req, res) => {
    const pagina={
        docs_nodejs: true,
        title: 'Node.js Documentation'
    }

    //tentativa de renderizar usando react
    //res.render(`${__dirname}/nodejs/index.js`,{pagina, layout: 'layout-docs'}) 
    
    // renderização padrão com handlebars
    res.render(`${__dirname}/nodejs/nodejs.handlebars`,{pagina, layout: 'layout-docs'})
})

router.get('/',(req,res) => {
    const pagina = {
        docs: true,
        active: 'active'
    }
    res.render(`${viewsPath}/docs.handlebars`,{pagina})
})

module.exports = router