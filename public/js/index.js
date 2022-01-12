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
// UTILIZANDO PDF.JS

function abreCert(id,url_,descricao){
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

    const url = url_
    
    let pdfDoc = null,
        pageNum = 1,
        pageIsRendering = false,
        pageNumIsPending = null;

    const scale = 1.5,
        canvas = document.querySelector('#pfd-render'),
        ctx = canvas.getContext('2d');


    // Renderizar a página

        const renderPage = num => {
            pageIsRendering = true

            pdfDoc.getPage(num).then(page => {
                const viewport = page.getViewport({scale})

                canvas.height = viewport.height
                canvas.width = viewport.width

                const renderCtx = {
                    canvasContext: ctx,
                    viewport
                }

                page.render(renderCtx).promise.then(() => {
                    pageIsRendering = false;
                    if(pageNumIsPending !== null){
                        renderPage(pageNumIsPending);
                        pageNumIsPending = null;
                    }
                })
            })
        }

    // Pegar documento
        
            const loadingTask = pdfjsLib.getDocument(url)
            loadingTask.promise.then(pdfDoc_ => {
                pdfDoc = pdfDoc_
                
                //renderPage(pageNum)
                //console.log('função de página capturada')
            })
    }