import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA NOMES---')

let numero = []

console.log('Me informe cinco nomes')

for(let cont = 0; cont < 5; cont++) {
    numero.push(ler())
}



console.log("\nOs nomes que você digitou foi:")
for ( let item of numero) {
    console.log(item)
}