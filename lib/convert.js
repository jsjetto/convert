const convert = (quotation, many) => {
  return quotation * many
}

const toMoney = valor => {
  return parseFloat(valor).toFixed(2)
}

module.exports = {
  convert,
  toMoney
}