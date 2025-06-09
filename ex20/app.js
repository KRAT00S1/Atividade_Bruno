import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA ALUNOS---')

let notas = []


console.log('Me informe o limte ')
let qtd = Number(ler())

console.log('Me informe a média de cada aluno:')

for (let cont = 0; cont < qtd;cont++){
    notas.push(Number(ler()))
}

let array = []
for (let cont = 0; cont < qtd; cont++){
    console.log
    if (notas[cont] < 6){
        array.push(cont)
    }
}

console.log('As notas digitadas foram:')

for(let item of notas){
    process.stdout.write(`${item}-`)
}
console.log()
console.log('Os alunos que nao passara foram')

for(let item of array ){
    process.stdout.write(`${item} `)
}