import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA INVERSO---')

let numero = [] 

console.log('Me informe quantos numeros você quer digitar')
let qtd = Number(ler())

for (let cont = 0; cont < qtd; cont++) {
    numero.push(Number(ler()))
}

console.log(`Os ${qtd} numeros que você digitou são:`)

for(let cont = qtd - 1; cont >= 0; cont--){
    let item = numero[cont]
    console.log(item)
}