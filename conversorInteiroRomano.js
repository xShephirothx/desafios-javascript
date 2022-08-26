// O seguinte código tem como intuíto testar habilidades e resolver problemas propostos
// By: Marcos Bento
//#####################################################
// Conversor Decimal para Romano
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

let numeroDecimal = "19" // <== Digite o número aqui
let milhar = 0
let centena = 0
let dezena = 0
let unidade = 0
let romano = ""

//#####################################################
// Escopo inicial
//#####################################################

conversorDecimalRomano(numeroDecimal)

function conversorDecimalRomano (numeroDecimal){
    if (numeroDecimal.length==4){ // SE o valor digitado for acima de 999
        milhar = numeroDecimal[0]
        centena = numeroDecimal[1]
        dezena = numeroDecimal[2]
        unidade = numeroDecimal[3]
        numeroRomanoMilhar(milhar,centena,dezena,unidade)
    }else if (numeroDecimal.length==3){ // SE o valor digitado for acima de 99
        centena = numeroDecimal[0]
        dezena = numeroDecimal[1]
        unidade = numeroDecimal[2]  
        numeroRomanoCentena(centena,dezena,unidade)
    }else if (numeroDecimal.length==2){ // SE o valor digitado for acima de 9
        dezena = numeroDecimal[0]
        unidade = numeroDecimal[1] 
        numeroRomanoDezena(dezena,unidade) 
    }else if (numeroDecimal.length==1){ // SE o valor digitado for 9 ou abaixo
        unidade = numeroDecimal[0]
        numeroRomanoUnidade(unidade)
    }else{
        console.log("Valor incalculado")
        return
    }
}

//#####################################################
//Conversor da casa do milhar
//#####################################################

function numeroRomanoMilhar(milhar,centena,dezena,unidade){
    switch (milhar) {
        case "1":
            romano = "M"
            break;
        case "2":
            romano = "MM"
            break;
        case "3":
            romano = "MMM"
            break;
        case "4":
            romano = "Para números acima de 4000, usa-se um caractere especial: IV"
          break;
        case "5":
            romano = "Para números acima de 4000, usa-se um caractere especial: V"
            break;
        case "6":
            romano = "Para números acima de 4000, usa-se um caractere especial: VI"
            break;
        case "7":
            romano = "Para números acima de 4000, usa-se um caractere especial: VII"
            break;
        case "8":
            romano = "Para números acima de 4000, usa-se um caractere especial: VIII"
            break;
        case "9":
            romano = "Para números acima de 4000, usa-se um caractere especial: IX"
            break;
        default:
            break;
    }
    numeroRomanoCentena(centena,dezena,unidade)
}

//#####################################################
// Conversor da casa da Centena
//#####################################################

function numeroRomanoCentena(centena,dezena,unidade){
    switch (centena) {
        case "1":
            romano = romano + "C"
            break;
        case "2":
            romano = romano + "CC"
            break;
        case "3":
            romano = romano + "CCC"
            break;
        case "4":
            romano = romano + "CD"
          break;
        case "5":
            romano = romano + "D"
            break;
        case "6":
            romano = romano + "DC"
            break;
        case "7":
            romano = romano + "DCC"
            break;
        case "8":
            romano = romano + "DCCC"
            break;
        case "9":
            romano = romano + "CM"
            break;
        default:
            break;
    }
    numeroRomanoDezena(dezena,unidade)
}

//#####################################################
// Conversor da casa da Dezena
//#####################################################

function numeroRomanoDezena(dezena,unidade){
    switch (dezena) {
        case "1":
            romano = romano + "X"
            break;
        case "2":
            romano = romano + "XX"
            break;
        case "3":
            romano = romano + "XXX"
            break;
        case "4":
            romano = romano + "XL"
          break;
        case "5":
            romano = romano + "L"
            break;
        case "6":
            romano = romano + "LX"
            break;
        case "7":
            romano = romano + "LXX"
            break;
        case "8":
            romano = romano + "LXXX"
            break;
        case "9":
            romano = romano + "XC"
            break;
        default:
            break;
    }
    numeroRomanoUnidade(unidade)
}

//#####################################################
// Conversor da casa da Unidade
//#####################################################

function numeroRomanoUnidade(unidade){
    switch (unidade) {
        case "1":
            romano = romano + "I"
            break;
        case "2":
            romano = romano + "II"
            break;
        case "3":
            romano = romano + "III"
            break;
        case "4":
            romano = romano + "IV"
          break;
        case "5":
            romano = romano + "V"
            break;
        case "6":
            romano = romano + "VI"
            break;
        case "7":
            romano = romano + "VII"
            break;
        case "8":
            romano = romano + "VIII"
            break;
        case "9":
            romano = romano + "IX"
            break;
        default:
            break;
    }
    console.log(`O seu número ${numeroDecimal} equivale ao algarismo em romano: ${romano}`)
}

// Fim do código
//#####################################################