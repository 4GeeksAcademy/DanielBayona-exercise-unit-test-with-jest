const sum = (a,b) =>{
    return a + b;
}

console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) =>{
    let valueInYen = valueInDollar * oneEuroIs.JPY;

    return valueInYen;
   
}

const fromYenToPound = (valueInYen) =>{
    let valueinPound = valueInYen * oneEuroIs.GBP;
    return valueinPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }