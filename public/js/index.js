function abreQr(img){

    //console.log('Falta implementar corretamente esta função')
    const div_img = document.getElementById(`img-qrcode`)
    
    const img_append = document.createElement('img')
    img_append.src = `public/img/qrcode-${img}`//`./img/qrcode-${img}.png`
    img_append.alt = `QR code do ${img}`

    div_img.style.width = '300px'
    div_img.style.height = '300px'
    div_img.style.backgroundImage = `url("/img/qrcode-${img}.png")`
    div_img.style.backgroundRepeat = 'no-repeat'//*/
    div_img.style.backgroundPosition = 'center'
    div_img.style.backgroundColor = '#fff'
}

function fechaQr(img){
    //console.log('Falta implementar corretamente esta função')/*
    const div_img = document.getElementById(`img-qrcode`)
    div_img.style.backgroundImage = ''
    div_img.style.backgroundColor = "#212529"//*/
}

function abreCert(id,imagem,descricao){
    const img_cert = document.getElementById('img-cert')
    const desc_cert = document.getElementById('desc-cert').children[0]
    
    const img_append = document.createElement('iframe')
    img_append.id = `img-cert-${id}`
    img_append.src = 'public/certificados/DIO/React Components.pdf'
    img_append.style.width = '640px'
    img_append.style.height = '480px'

    desc_cert.innerHTML = descricao

    img_cert.appendChild(img_append)
}

function fechaCert(id){
    const img_cert = document.getElementById('img-cert')
    const desc_cert = document.getElementById('desc-cert').children[0]

    desc_cert.innerHTML = ''

    img_cert.removeChild(document.getElementById(`img-cert-${id}`))
}