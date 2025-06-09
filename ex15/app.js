import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA NOMES 2--')

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
    let ttl = nome[cont];
    if (ttl[0].toUpperCase() == 'L'){
        console.log(ttl)
    }
    else if (ttl[0].toUpperCase()== 'H'){
        console.log(ttl)
    }
}