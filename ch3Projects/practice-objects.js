let myCar = {
    color: "blue",
    make: "Audi",
    model: "S6",
    year: 2015,
    wasServicedThisYear: true,
    hasVanityPlate: false,
    forSale: true
};

let variable = "color";
myCar[variable] = "silver";
variable = "forSale";
myCar[variable] = false;
console.log(myCar.make, myCar.model);
console.log(myCar.forSale);

let myRoom = {
    length: 11,
    width: 12,
    wallColor: "sunshine yellow",
    isCarpeted: false,
    hasWindows: true,
    numberOfWindows: 2,
    isUpstairs: true,
    isFurnished: true,
    furniture: ["bed", "bookcase", "desk", "chair", "dresser"],
    hasAirConditioner: false
};

let people = {
    friends: []
};

let friend1 = {
    fName: "Alice",
    lName: "Granger",
    iD: 1
};

let friend2 = {
    fName: "Zoe",
    lName: "Garcia",
    iD: 2
};

let friend3 = {
    fName: "Mahmoud",
    lName: "Ali",
    iD: 3
};

people.friends.push(friend1, friend2, friend3);
console.log(people.friends[0], people.friends[1], people.friends[2]);localStorage