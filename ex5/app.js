import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA TABUADA---')

let numeros = []

console.log('me informe um numero');
let num = Number(ler());

for(let cont = 0; cont <= 10; cont++){
    let total = num * cont;
    numeros.push(total) 
}

console.log(`A tabuada do ${num} é`);

for (let item of numeros){
    console.log(item)
}