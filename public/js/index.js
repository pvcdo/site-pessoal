function abreQr(img){

    const div_img = document.getElementById(`img-qrcode`)
    
    const img_append = document.createElement('img')
    img_append.src = `public/img/qrcode-${img}.png`//`./img/qrcode-${img}.png`
    img_append.alt = `QR code do ${img}`

    div_img.style.width = '300px'
    div_img.style.height = '300px'
    div_img.style.backgroundImage = `url("/img/qrcode-${img}.png")`
    div_img.style.backgroundRepeat = 'no-repeat'//*/
    div_img.style.backgroundPosition = 'center'
    div_img.style.backgroundColor = '#fff'
}

function fechaQr(img){
    
    const div_img = document.getElementById(`img-qrcode`)
    div_img.style.backgroundImage = ''
    div_img.style.backgroundColor = "#212529"//*/
}

// COLOCAR ICONE DO NODE NOS TÍTULOS

function colocarIcone(){
    
    const url = window.location.href
    const url_split = url.split('/')
    const url_split_tamanho = url_split.length

    const nomeDoc = url_split[url_split_tamanho-1]
    const nomeDoc_corrigido = nomeDoc.split('#')[0]

    if(nomeDoc_corrigido === "nodejs"){

        console.log("Estamos na apostila " + nomeDoc_corrigido)

        const titulos = document.getElementsByTagName('h2')
        const n_titulos = titulos.length
        for(let n = 0; n < n_titulos; n++){

            const texto_titulo = titulos[n].innerHTML
            titulos[n].innerHTML = ""

            const data = document
            
            const span = data.createElement('span')
            span.style.color = "green"

            const i = data.createElement('i')
            i.classList.add("fab", "fa-node-js")

            const span_texto = data.createElement('span')
            span_texto.innerHTML = texto_titulo

            span.appendChild(i)

            titulos[n].appendChild(span)
            titulos[n].appendChild(span_texto)
                    
        }
    }

    

    
        /*const listaIconesNode = data.getElementsByClassName('fa-node-js')
        const contarIcones = listaIconesNode.length
        if(contarIcones = 0){                            
            const span = data.createElement('span')
            span.style.color = "green"

            const i = data.createElement('i')
            i.classList.add("fab", "fa-node-js")

            span.appendChild(i)

            data.getElementById(secao).appendChild(span)
        }*/
    
}
