// Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos,
// outputting the results to the console:
// 1 inch is equal to 2.54 cm
// 2.2046 pounds is equal to 1 kilo
// Output the results. Then calculate and log the BMI: this is equal to weight (in kilos)
// divided by squared height (in meters). Output the results to the console


function main() {
    const inToMRate = .0254;
    const lbsToKilosRate = (1 / 2.2046)
    let myHeightInInches = 68;
    let myWeightInLbs = 150;
    let myHeightInMeters = 0.0;
    let myWeightInKilos = 0.0;
    let myBmi = 0.0;
    
    // convert height to meters and weight to kilos
    myHeightInMeters = convertStuff(myHeightInInches, inToMRate);
    myWeightInKilos = convertStuff(myWeightInLbs, lbsToKilosRate);

    // calculate BMI
    myBmi = calculateBmi(myHeightInMeters, myWeightInKilos);

    // log results to screen
    console.log(displayResults(myBmi));
};

function convertStuff(stuffToConvert, conversionRate) {
    let result = stuffToConvert * conversionRate;
    return result;
}

function calculateBmi(height, weight) {
    let result = weight / (height ** 2);
    return result;
}

function displayResults(bmi) {
    return `Your BMI is ${bmi}.`
}

main();