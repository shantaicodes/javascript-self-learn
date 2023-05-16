// playing with logic statements in order to understand them
// ok so real life stuff
let awake = true;
let after6Am = false;
if (awake && after6Am) {
  makeCoffee();
};


let amHungry = false;
let amThirsty = true;

if (amHungry || amThirsty) {
  goToKitchen();
}
  if (amHungry) {
    makeOats();
  }
  if (amThirsty) {
    drinkWater();
  }


let isNight = true;
let isDay = false;
let inBed = true;
let isStandingUp = false;
let energy = 3;

amThirsty = false;

if (inBed && isNight) {
  goToSleep();
  let isAsleep = true;
  while (isAsleep && isNight) { // i know there's a better way to do this. 
    energy++;
  };
};

