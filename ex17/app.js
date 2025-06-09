import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA MAIOR NOTA---')

let notas = []


console.log('Me informe o limte ')
let qtd = Number(ler())

console.log('Me informe as notas:')

for (let cont = 0; cont < qtd;cont++){
    notas.push(Number(ler()))
}

let maior =[]

for (let cont = 0; cont < qtd; cont++){
        if (notas[cont] > maior) {
        maior = notas[cont];
    } 
}

console.log(maior)