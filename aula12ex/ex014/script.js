function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas!</strong>`
    if (hora >=0 && hora < 12) {
        //BOM  DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = '#f9f6f5'
    } else if (hora >=12 && hora <18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#ba7869'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#00609d'
        //BOA NOITE
    }
}

