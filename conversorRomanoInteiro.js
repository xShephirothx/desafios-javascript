// O seguinte código tem como intuíto testar habilidades e resolver problemas propostos
// By: Marcos Bento
//#####################################################
// Conversor Romano para Decimal
//#####################################################
//
// Tabela de conversão
//
// 1 = I
// 2 = II
// 3 = III
// 4 = IV  (5-1)
// 5 = V
// 9 = IX   (10-1)
// 10 = X
// 40 = XL  (50-10)
// 50 = L
// 90 = XC  (100-10)
// 100 = C
// 400 = CD (500-100)
// 500 = D 
// 900 = CM (1000-100)
// 1000 = M
// 4000 = IV com barra sobrescrito
// 5000 = V com barra sobrescrito
// 6000+ = o mesmo com barra sobrescrito
//
//#####################################################
// Declaração das variáveis
//#####################################################

let numeroRomano = "DCCXXV" // <== Digite o número aqui
let sequencial = 0 // variável usada para validar se há mais do que 4 algarísmos iguais repetidos
let decimal = 0

//#####################################################
// Escopo inicial
//#####################################################

conversorRomanoDecimal(numeroRomano.toUpperCase())

function conversorRomanoDecimal (numeroRomano){
    // Esse for serve para validar o algarismo romano, que permite no máximo 3 algarismos repetidos
    for (let index = 0; index < numeroRomano.length; index++) { 
        if (index != numeroRomano.length-1){
            if (numeroRomano[index] == numeroRomano[index+1]) {
                sequencial ++ 
            } else {
                sequencial = 0
            }
        }
    }
    if (sequencial == 3){
        console.log("Valor incorreto")
    }else{
        if (numeroRomano.length>2){ // SE o valor digitado for de 3 algarismos ou mais
            for (let index = 0; index < numeroRomano.length; index++) {
                if (index != numeroRomano.length){
                    if (validaDoisNumeros(numeroRomano[index],numeroRomano[index+1])){
                        numeroRomanoDezena(numeroRomano[index],numeroRomano[index+1])
                        index++
                    } else {
                        numeroRomanoUnidade(numeroRomano[index])
                    }
                }
            }
            printaNaTela(decimal)
        } else if (numeroRomano.length==2){ // SE o valor digitado for de 2 algarismos 
            numeroRomanoDezena(numeroRomano[0],numeroRomano[1])
            printaNaTela(decimal) 
        } else if (numeroRomano.length==1){ // SE o valor digitado for de 1 algarismo
            numeroRomanoUnidade(numeroRomano[0])
            printaNaTela(decimal)
        }
    }
}

//#####################################################
// Função para validar se existem dois algarismos que um deduz o outro.
//#####################################################

function validaDoisNumeros(numero1,numero2){    
    switch (numero2) {
        case "V":
            if (numero1 == "I"){ return true }
            break;  
        case "X":
            if (numero1 == "I"){ return true }
            break;        
        case "L":
            if (numero1 == "X"){ return true }
            break;   
        case "C":
            if (numero1 == "X"){ return true }
            break;                
        case "D":
            if (numero1 == "C"){ return true }
            break;   
        case "M":
            if (numero1 == "C"){ return true }
            break;                                          
        default:
            return false
    }
}

//#####################################################
// Função para converter dois algarismos, quando um deles serve para deduzir do segundo.
//#####################################################

function numeroRomanoDezena(numero1,numero2){    
    switch (numero2) {
        case "V":
            if (numero1 == "I"){ decimal = decimal + 4 } else { conversorUnidade() }
            break;  
        case "X":
            if (numero1 == "I"){ decimal = decimal + 9 } else { conversorUnidade() }
            break;        
        case "L":
            if (numero1 == "X"){ decimal = decimal + 40 } else { conversorUnidade() }
            break;   
        case "C":
            if (numero1 == "X"){ decimal = decimal + 90 } else { conversorUnidade() }
            break;                
        case "D":
            if (numero1 == "C"){ decimal = decimal + 400 } else { conversorUnidade() }
            break;   
        case "M":
            if (numero1 == "C"){ decimal = decimal + 900 } else { conversorUnidade() }
            break;                                          
        default:
            conversorUnidade()
            break;
    }
}

//#####################################################
// função que envia algarismo por algarismo para ser convertido de forma unitária
//#####################################################

function conversorUnidade(){
    for (let index = 0; index < numeroRomano.length; index++) {
        numeroRomanoUnidade(numeroRomano[index])
    }
}

//#####################################################
// função que converte cada algarismo
//#####################################################

function numeroRomanoUnidade(numero1){
    switch (numero1) {
        case "I":
            decimal = decimal + 1
            break;
        case "V":
            decimal = decimal + 5
            break;
        case "X":
            decimal = decimal + 10
            break;
        case "L":
            decimal = decimal + 50
            break;
        case "C":
            decimal = decimal + 100
            break;
        case "D":
            decimal = decimal + 500
            break;
        case "M":
            decimal = decimal + 1000
            break;
        default:
            break;
    }
}

//#####################################################
// função para imprimir no terminal
//#####################################################

function printaNaTela(numero){
    console.log(`O seu algarismo romano ${numeroRomano} equivale ao número: ${numero}`)
}

// Fim do código
//#####################################################