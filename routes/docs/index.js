const express = require('express')
const router = express.Router()

const path = require('path')

const viewsPath = path.join(__dirname,'../../views')

router.get('/nodejs', (req, res) => {
    const pagina={
        docs_nodejs: true,
        title: 'Node.js Documentation'
    }
    res.render(`${__dirname}/nodejs.handlebars`,{pagina, layout: 'layout-docs'})
})

router.get('/',(req,res) => {
    const pagina = {
        docs: true,
        active: 'active'
    }
    res.render(`${viewsPath}/docs.handlebars`,{pagina})
})

module.exports = router