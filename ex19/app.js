import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA MÉDIA---')

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

let media = soma / qtd

let maior =[]

for (let cont = 0; cont < qtd; cont++){
        if (notas[cont] > maior) {
        maior = notas[cont];
    } 
}

let menor = notas[0]

for (let cont = 0; cont < qtd; cont++){
        
      if (notas[cont] < menor) {
        menor = notas[cont];
    } 
}


console.log(`A media é ${media.toFixed(1)}`)
console.log(`A maior nota: ${maior}`)
console.log(`A menor nota: ${menor}`)