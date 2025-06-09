import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA MENOR NOTA--')

let notas = []




console.log('Me informe o limte ')
let qtd = Number(ler())

console.log('Me informe as notas:')

for (let cont = 0; cont < qtd;cont++){
    notas.push(Number(ler()))
}

let menor =notas [0]

for (let cont = 0; cont < qtd; cont++){
        
      if (notas[cont] < menor) {
        menor = notas[cont];
    } 
}

console.log(menor)