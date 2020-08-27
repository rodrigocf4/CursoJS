function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formuano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formuano.value.length == 0 || Number(formuano.value) > ano) {
        window.alert('[ERRO] Verique se o ano é válido e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formuano.value)
        //res.innerHTML = `Idade calculada: <strong>${idade} anos</strong>`
        var sexo = ''
        //abaixo é mostrada a criação de um img para as fotos dinamicamente, como alternativa a criação no código HTML
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            sexo = 'Homem'
            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src','imagens/criancah.png')
            }else if (idade<21){
                //adolescente
                img.setAttribute('src','imagens/adolescenteh.png')
            }else if (idade<50){
                //adulto
                img.setAttribute('src','imagens/adulto.png')
            }else {
                //idoso
                img.setAttribute('src','imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            sexo = 'Mulher'
            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src','imagens/criancam.png')
            }else if (idade<21){
                //adolescente
                img.setAttribute('src','imagens/adolescentem.png')
            }else if (idade<50){
                //adulta
                img.setAttribute('src','imagens/adulta.png')
            }else {
                //idosa
                img.setAttribute('src','imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) <strong>${sexo}</strong> com <strong>${idade} anos</strong>.`
        res.appendChild(img)
    }

}
