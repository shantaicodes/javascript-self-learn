

function main() {
    const inToMRate = .0254;
    const lbsToKilosRate = (1 / 2.2046)
    let myHeightInInches = 0.0;
    let myWeightInLbs = 0.0;
    let myHeightInMeters = 0.0;
    let myWeightInKilos = 0.0;
    let myBmi = 0.0;

    // prompt user for input
    myHeightInInches = getHeight();
    myWeightInLbs = getWeight();
    
    // convert height to meters and weight to kilos
    myHeightInMeters = convertStuff(myHeightInInches, inToMRate);
    myWeightInKilos = convertStuff(myWeightInLbs, lbsToKilosRate);

    // calculate BMI
    myBmi = calculateBmi(myHeightInMeters, myWeightInKilos);

    // log results to screen
    console.log(displayResults(myBmi));
};


function getHeight() {
    let height = prompt("Enter your height in inches: ");
    return height;
}
  
function getWeight() {
    let weight = prompt("Enter your weight in pounds: ");
    return weight;
}

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