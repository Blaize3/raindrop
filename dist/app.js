"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*eslint-disable*/

factors = function factors(number) {
    /*
        The factors function is to generate the factors of number and 
        store values in factorsOfNumber variable
    */
    var factorsOfNumber = []; //holds the generated factors
    var quotient = 0; // temporary store for a factor

    for (var divisor = 1; divisor < number; divisor++) {
        if (number % divisor == 0) {
            quotient = number / divisor;
            factorsOfNumber.push(divisor); // add a factor to factorsOfNumber array
            factorsOfNumber.push(quotient); // add a factor to factorsOfNumber array
        } // ends if conditional
    } // ends for loop

    return factorsOfNumber;
};

stringProcessor = function stringProcessor(number) {

    var resultingFactors = factors(number);
    var isThree = false;
    var isFive = false;
    var isSeven = false;

    //console.log(resultingFactors);

    var generatedString = "";

    for (var i = 0; i < resultingFactors.length; i++) {
        if (resultingFactors[i] == 3) {
            isThree = true;
        }

        if (resultingFactors[i] == 5) {
            isFive = true;
        }

        if (resultingFactors[i] == 7) {
            isSeven = true;
        }
    } // ends for loop to set the boolean value of test variables

    if (isThree) {
        generatedString += "Pling";
    } // ends if to check the occurence of 3

    if (isFive) {
        generatedString += "Plang";
    } // ends if to check the occurence of 5

    if (isSeven) {
        generatedString += "Plong";
    } // ends if to check the occurence of 7

    if (generatedString == "") {
        return generatedString + number;
    } else {
        return generatedString;
    } // ends if conditional to check generated string
}; // ends stringProcessor  

exports.default = stringProcessor;