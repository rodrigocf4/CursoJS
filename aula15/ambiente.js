let num = [5,9,6,5,4]
console.log(num)
num.push(7)
num.sort()
console.log(num)
let n = num.length
//console.log(n)
//for (let pos = 0 ; pos<num.length ; pos++) {
    //console.log(`A posição ${pos} tem o valor ${num[pos]}`)
for(let pos in num) { //Funciona para arrays e objects essa estrutura For
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(num.indexOf(9))
//Quando o JS não encontra o numero procurado no indexOf, é retornado o valor -1
