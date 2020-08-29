function contar() {
    let a = document.getElementById('num1')
    let b = document.getElementById('num2')
    let p = document.getElementById('numpasso')
    let res = document.querySelector('div#res')

    if (a.value.length == 0 || b.value.length == 0 || p.value.length == 0) {
        window.alert('Digite um número para iniciar!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(a.value)
        let j = Number(b.value)
        let passo = Number(p.value)
        if (passo <=0){
            window.alert('Passo inválido! Considerando passo 1')
            passo = 1
        }
        if(j<=i){
            for(let c = i;c>=j;c-=passo){
                res.innerHTML += `${c} ` + String.fromCodePoint(0x1F449)
            }
        }else{
            for(let c = i;c<=j;c+=passo){
                res.innerHTML += `${c} ` + String.fromCodePoint(0x1F449)
            }
            
        }
        res.innerHTML+=`\u{1F3C1}`
             
    }

}

