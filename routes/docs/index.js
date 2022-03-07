const express = require('express')
const router = express.Router()

const path = require('path')

const viewsPath = path.join(__dirname,'../../views')

const app = express();

router.get('/nodejs', (req, res) => {
    const pagina={
        docs_nodejs: true,
        title: 'Node.js Documentation',
    }

    const arr_secoes = [
        ['secao1-introducao','Introdução'],
        ['secao2-fundamentos', 'Fundamentos NodeJS'],
        ['secao3-core-modules', 'Core Modules'],
        ['secao4-npm-fundamentos', 'Fundamentos NPM'],
        ['secao6-express', 'Express'],
        ['secao7-template-engines', 'Template Engines'],
        ['secao8-mysql', 'MySQL'],
        ['secao9-sequelize', 'Sequelize'],
        ['secao10-mvc', 'MVC'],
        ['secaofinal-aprofundarEm',''],
    ]

    const secoes = []

    arr_secoes.forEach(secao => {
        //const partial= require(`${viewsPath}/partials/docs/nodejs/${secao}.handlebars`)
        const obj_secao = {
            id: secao[0],
            menu: secao[1]
        }
        if(secao !== 'secaofinal-aprofundarEm'){
            obj_secao.visu = true;
        }else{
            obj_secao.visu = false;
        }
        secoes.push(obj_secao)
    })

    //tentativa de renderizar usando react
    //res.render(`${__dirname}/render/src`) 
    
    // renderização padrão com handlebars
    res.render(
        `${__dirname}/nodejs/nodejs2.handlebars`,
        {
            pagina, 
            secoes, 
            layout: 'layout-docs', 
            helpers:{
                partialDocs: function(secao){
                    //return fs.readFileSync(viewsPath + '\\partials\\docs\\nodejs\\' + secao + ".handlebars", 'utf-8')
                    return ('docs/nodejs/' + secao)
                } 
            }
        }
    )
})

router.get('/',(req,res) => {
    const pagina = {
        docs: true,
        active: 'active'
    }
    res.render(`${viewsPath}/docs.handlebars`,{pagina})
})

module.exports = router