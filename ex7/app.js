import prompt from 'prompt-sync'
let ler = prompt()

 console.log('---PROGRAMA CINEMA---')

let numero = []

console.log('Me informe quantos numeros e o codigo do cupom')
let qtd = Number(ler())
let nome = ler ()


for (let cont = 1; cont <= qtd; cont++){
    numero.push(`${nome}${cont} `)

}

console.log(`os ${qtd} ingresso que você digitou foram`)


for (let item of numero){
    console.log(item)

}

