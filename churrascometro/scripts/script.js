// carne   - 400gr por pessoa + de 6h 650gr
// cerveja - 1200ml por pessoa + de 6h 2000ml
// refrigerante/agua - 1000ml por pessoa + de 6h  1500ml

// crianca vale 0.5 pessoa

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputduracao.value;

    let qtdTotalCarne = (carnePP(duracao) * adultos) + (carnePP(duracao)/2 * criancas);
    let qtdTotalAguaSucoRefri = (aguaSucoRefrigerantePP(duracao) * adultos) + (aguaSucoRefrigerantePP(duracao)/2 * criancas);
    let qtdTotalCerveja = (cervejaPP(duracao) * adultos);
    // console.log('qtdTotalCarne: ' + qtdTotalCarne);
    // console.log('qtdTotalCerveja: ' + qtdTotalCerveja);
    // console.log('qtdTotalAguaSucoRefri: ' + qtdTotalAguaSucoRefri);
 
    resultado.innerHTML =  `<p>${qtdTotalCarne / 1000}Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latinhas de cerveja de 355 ml</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalAguaSucoRefri / 2000)} garrafa(s) PET de 2 litros</p>`
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000;
    } 
    return 1200;
}

function carnePP(duracao) {
    if(duracao >= 6) {
        return 650;
    } 
    return 400;
}

function aguaSucoRefrigerantePP(duracao) {
    if(duracao >= 6) {
        return 1500;
    } 
    return 1000;
}