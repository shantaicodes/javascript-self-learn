// create a variable that contains a value in miles, 
// convert it to kilometers, and log the value in kilometers in the following format:
// "The distance of 130 miles is equal to 209.2142 kms"

function convertMilesToKm(miles) {
    const conversionRate = 1.60934
    let kms = miles * conversionRate
    return kms
}

function logConversionResult(miles, kms) {
    return `The distance of ${miles} miles is equal to ${kms} kms`
}


let milesToConvert = 130
let convertedKm = convertMilesToKm(milesToConvert)
let result = logConversionResult(milesToConvert, convertedKm)
console.log(result)