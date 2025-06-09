import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA SOMA---')

let numero = []
let numero1 = []
let numero2= []



console.log('Me informe quantos numeros você que digitar')
let qtd = Number(ler())

for(let i = 0; i <qtd; i++){
    numero.push(Number(ler()));
}
console.log('me informe outros numeros: ');

for(let i = 0; i <qtd; i++){
    numero1.push(Number(ler()));
}



for(let item of numero){
    console.log(item)
}

console.log('O segundo deles é');

for (let item of numero1){
    
    console.log(item)
}


for (let cont= 0; cont < qtd; cont++ ){
    let soma = numero[cont] + numero1[cont]
    numero2.push(soma)
}

console.log('a soma dos vetores são')


for (let item of numero2){
    console.log(item)
}
