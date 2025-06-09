import prompt from 'prompt-sync'
let ler = prompt()


console.log('---PROGRAMA DOAÇÕES COM META---')




console.log('Me informe a quantidade de doações ')
let qtd = Number(ler())


while (qtd != -1 ){
    let doocao = []
    let soma = 0;

    console.log('Me informe qual sera a central de doações ')
    let nome = ler()

    console.log('Me informe a meta da associação')
    let meta = Number(ler())

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

    let maior = [];

    for (let cont = 0; cont < qtd; cont++){
        if (doocao[cont] > maior){
            maior.push(doocao[cont])
        }
    }
     console.log()
    console.log(`O maior valor digitada foi ${maior[0]}`)

    let ll ='';

    if(soma < meta ){
        ll= 'A meta nâo foi batida'
    }

    else if (soma >= meta ){
        ll= 'A meta foi batida'
    }

    console.log(ll)


    console.log()
    console.log()
    console.log('Me informe a quantidade de doações ')
    qtd = ler()




}

    

