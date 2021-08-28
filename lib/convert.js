//Funcao para multiplicar cotacao pela quantidade
const convert = ( cotacao, quantidade) => {
    return cotacao * quantidade
}
//Quantos digitos eu quero depois da virgula na cotacao
const toMoney = valor => {
    return parseFloat(valor).toFixed(2)
}


module.exports = {
    convert,
    toMoney,
}