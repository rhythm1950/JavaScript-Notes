// https://github.com/Rhythm1950/assignment-js

// 1. 1st problem starts here
function kilometerToMeter (km){
    var meter = km * 1000;
    if (km < 0 ) {
        return "Distance cannot be negative.";       
    }
    return meter;
}


// 2. 2nd problem starts here
function budgetCalculator (watch, mobile, laptop){
    var watchCost = Math.round(watch) * 50;
    var mobileCost = Math.round(mobile) * 100;
    var laptopCost = Math.round(laptop) * 500;
    var totalCost = watchCost + mobileCost + laptopCost;
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Please input a valid number.";
    }
    return totalCost;
}


// 3. 3rd problem starts here
function hotelCost (nights) {
    var cost = 0;
    if (Math.ceil(nights) < 0){
        return "Please input a valid number.";
    }
    else if (Math.ceil(nights) <= 10) {
        cost = Math.ceil(nights) * 100;
    } 
    else if (Math.ceil(nights) <= 20) {
        var part1 = 10 * 100;
        var remaining = Math.ceil(nights) - 10;
        var part2 = remaining * 80;
        cost = part1 + part2;
    }
    else {
        var part1 = 10 * 100;
        var part2 = 10 * 80;
        var remaining = Math.ceil(nights) - 20;
        var part3 = remaining * 50;
        cost = part1 + part2 + part3;
    }   
    return cost;
} 


// 4. 4th problem starts here
function megaFriend(names) {
    let maxchar = " ";
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > maxchar.length) {
           maxchar = names[i];
       }        
    }
    return maxchar;
}