import prompt from 'prompt-sync'
let ler = prompt()

let numero = []
let dobro =[];


console.log('Me informe quantos numeros você que digitar')
let qtd = Number(ler())

for(let cont = 0; cont <qtd; cont++){
    
    numero.push(ler());
    
    dobro.push(numero[cont]*2);
}

for (let i = 0; i < qtd; i++) {
    console.log(`O dobro de ${numero[i]} é ${dobro[i]}`);
}

