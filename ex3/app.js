import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA QUANTIDADE---')

let numero = []

console.log('Me informe quantos numeros você quer digitar')
let qtd = Number(ler())

for (let cont = 0; cont < qtd; cont++){
    numero.push(Number(ler()))    
}

console.log(`os ${qtd} que você digitou foram`)

for (let item of numero){
    console.log(item)
}