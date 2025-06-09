import prompt from 'prompt-sync'
let ler = prompt()

let notas = []


console.log('Me informe o limte ')
let qtd = Number(ler())

console.log('Me informe as notas:')

for (let cont = 0; cont < qtd;cont++){
    notas.push(Number(ler()))
}

let soma=0

for (let cont = 0; cont < qtd; cont++){
    soma+=notas[cont] 
}



console.log(`A media é ${media.toFixed(1)}`)