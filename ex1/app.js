import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA NUMEROS---')

let numeros = []

console.log('me informe cinco numeros');

for (let cont = 0; cont < 5;cont++){
    numeros.push(Number(ler()));
}


console.log('Os numeros que você digitou foram')
for (let item of numeros){
    console.log(item)
}

