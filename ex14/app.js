import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA NOMES---')

let nome = []

console.log('Me informe o limte')
let qtd = Number(ler())

console.log('informe os nomes')

for ( let cont = 0; cont < qtd; cont++){
    nome.push(ler());
}

console.log()
console.log('Os nomes de minha escolha foram ')
console.log()


for(let cont = 0; cont < qtd; cont++){
    let nome = nome[cont];
    if (nome[0].toUpperCase() == 'L'){
        console.log(nome)
    }
}
