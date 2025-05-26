let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (monto) => {

    let cambio= (monto/oneEuroIs.USD)*oneEuroIs.JPY;
    return cambio;
}
console.log(fromDollarToYen(oneEuroIs,1))
const fromEurotoDollar = (monto) => {

    let cambio= monto*oneEuroIs.USD;
    return cambio;
}
console.log(fromEurotoDollar(oneEuroIs,1))
const fromYenToPound = (monto) => {

    let cambio= (monto/oneEuroIs.JPY)*oneEuroIs.GBP;
    return cambio;
}

console.log(fromYenToPound(oneEuroIs,1))
const sum = (a,b) => {
    return a + b
}


module.exports = {sum, fromDollarToYen, fromEurotoDollar, fromYenToPound };

