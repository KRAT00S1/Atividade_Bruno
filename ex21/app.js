import prompt from 'prompt-sync'
let ler = prompt()


console.log('---PROGRAMA DIA DA SEMANA---')

console.log("Núm. Dia da Semana");
console.log("0 Domingo");
console.log("1 Segunda");
console.log("2 Terça");
console.log("3 Quarta");
console.log("4 Quinta");
console.log("5 Sexta");
console.log("6 Sábado");
console.log()

let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]




console.log('Me informe um numero de 0 a 6 ')
let num = Number(ler())



if (num <0 || num >6){

console.log(`o dia escolhido é invalido`)
}

else if (num >=0 && num <=6){
    console.log(`o dia escolhido foi ${dias[num]}`
    )
}

else {
    console.log(`invalido`)
}
