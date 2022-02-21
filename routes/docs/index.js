const express = require('express')
const router = express.Router()

const path = require('path')

const viewsPath = path.join(__dirname,'../../views')

router.get('/nodejs', (req, res) => {
    const pagina={
        docs_nodejs: true,
        title: 'Node.js Documentation',
    }

    const secoes = [
        'secao1-introducao',
        'secao2-fundamentos',
        'secao3-core-modules',
        'secao4-npm-fundamentos',
        'secao6-express',
        'secao7-template-engines',
        'secao8-mysql',
        'secao9-sequelize',
        'secaofinal-aprofundarEm',
    ]

    //tentativa de renderizar usando react
    //res.render(`${__dirname}/render/src`) 
    
    // renderização padrão com handlebars
    res.render(`${__dirname}/nodejs/nodejs2.handlebars`,{pagina, secoes, layout: 'layout-docs'})
})

router.get('/',(req,res) => {
    const pagina = {
        docs: true,
        active: 'active'
    }
    res.render(`${viewsPath}/docs.handlebars`,{pagina})
})

module.exports = router