import prompt from 'prompt-sync'
let ler = prompt()


console.log('---PROGRAMA DOAÇÕES---')




console.log('Me informe a quantidade de doações ')
let qtd = Number(ler())


while (qtd != -1 ){
    let doocao = []
    
    let soma = 0;
    console.log('Me informe qual sera a central de doações ')
    let nome = ler()

    console.log('Me informe o valor da doação  ')
    for (let cont = 0; cont < qtd; cont++){
        doocao.push(Number(ler()));
        soma += doocao[cont];

    }

    console.log(`O projeto ${nome} recebeu ${qtd} doações,totalizando ${soma} reais.\n`)
    console.log()


    console.log('Os valores digitados foram')

    for (let item of doocao){
        process.stdout.write(`${item}  `)
    }
    console.log()
    console.log()
    console.log('Me informe a quantidade de doações ')
    qtd = ler()




}

    
    console.log('........Programa finalizado ')

