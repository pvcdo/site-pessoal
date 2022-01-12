alert('Necessário restringir a API Key no Google Cloud Platform')

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

// EXIBIR CERTIFICADOS NA PÁGINA ABOUT
