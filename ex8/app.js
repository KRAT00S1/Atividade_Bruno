import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA ALEATÓRIO---')

let numero = []

console.log('Me informe quantos numeros e o codigo do cupom')
let qtd = Number(ler())


for ( let cont = 0; cont < 100; cont++){
    let total  = parseInt(Math.random(qtd)*100);
    numero.push(total)
     
}

console.log('Os números gerados aleatoriamente foram:')
console.log(numero)