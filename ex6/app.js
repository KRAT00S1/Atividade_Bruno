
import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA FRASE---')


let numeros = []

console.log('Me informe uma frase');
let frase = ler();


for(let cont = 0; cont < frase.length; cont++){
    numeros.push(frase[cont])
}

for(let  item of numeros) {
    console.log(item)
}





