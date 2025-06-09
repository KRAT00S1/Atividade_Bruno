import prompt from 'prompt-sync'
let ler = prompt()

console.log('---PROGRAMA NUMERO PAR---')

let numero = []

console.log('Me informe o limte')
let qtd = Number(ler())

console.log('informe o numero')

for ( let cont = 0; cont < qtd; cont++){
    numero.push(Number(ler()));
}

console.log('Numeros pares')

for (let cont = 0; cont< qtd; cont++){

    let valor = numero[cont]

    if (valor % 2 == 0){
        console.log(valor)
    }
    else{

    }

}


