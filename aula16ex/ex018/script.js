let num = document.querySelector('input#num')
let array = document.querySelector('select#arr')
let res  = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function memorizar() {
    if(isNumero(num.value) && !inLista(num.value , valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        array.appendChild(item)
        res.innerHTML = ''

    }else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus() //mantem o cursor na janela de digitação do número
}

function calcular() {
    if(valores.length == 0) {
        window.alert('Adicione valores para realizar os cálculos!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }     
        }
        media = soma / valores.length //ou tot (variavel)
        res.innerHTML = ''
        res.innerHTML += `<h2>Ao todo, temos ${tot} números cadastrados.</h2>`
        res.innerHTML +=  `<h3> O maior número informado foi ${maior}!</h3>`
        res.innerHTML +=  `<h3> O menor número informado foi ${menor}!</h3>`
        res.innerHTML +=  `<h3> A soma dos valores é ${soma}!</h3>`
        res.innerHTML +=  `<h3> A média dos valores é ${media}!</h3>`
    }
}