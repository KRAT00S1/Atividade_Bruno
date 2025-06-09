import prompt from 'prompt-sync'
let ler = prompt()


console.log('---PROGRAMA MÊS---')


console.log("    Mês   ");
console.log("1 Janeiro");
console.log("2 Fevereiro");
console.log("3 Março");
console.log("4 Abril");
console.log("5 Maio");
console.log("6 Junho");
console.log("7 Julho");
console.log("8 Agosto");
console.log("9 Setembro");
console.log("10 Outubro");
console.log("11 Novembro");
console.log("12 Dezembro");

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

console.log('Me informe o mês a partir do numero:')
let num = Number(ler());




if (num <0 || num >11){

console.log(`o mês escolhido é invalido`)
}

else if (num >=0 && num <=6){
    console.log(`o mês escolido foi ${meses[num]}`
    )
}

else {
    console.log(`invalido apenas numeros`)
}
