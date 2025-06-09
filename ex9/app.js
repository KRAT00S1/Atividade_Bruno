import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA DOBRO--')

let numero = []
let dobro =[];


console.log('Me informe quantos numeros você que digitar')
let qtd = Number(ler())

for(let i = 0; i <qtd; i++){
    let valor = Number(ler( ))
    numero.push(valor);
    
    dobro.push(valor*2);
}

console.log('os numros que você digitou foi ');

for(let item of numero){
    console.log(item)
}

console.log('O dobro deles sâo');

for (let item of dobro){
    console.log(item)
}



