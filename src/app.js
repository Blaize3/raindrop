/*eslint-disable*/

export default {
    stringProcessor: (number) => {
            if (typeof(number) !== typeof(2)) {
                return "sorry, not a number"
            } else {
                const factorsOfNumber = []; //holds the generated factors
                let quotient = 0; // temporary store for a factor
                let isThree = false;
                let isFive = false;
                let isSeven = false;
                let generatedString = "";

                for (let divisor = 1; divisor < number; divisor++) {
                    if (number % divisor == 0) {
                        quotient = number / divisor;
                        factorsOfNumber.push(divisor); // add a factor to factorsOfNumber array
                        factorsOfNumber.push(quotient); // add a factor to factorsOfNumber array
                    } // ends if conditional
                }

                for (let i = 0; i < factorsOfNumber.length; i++) {
                    if (factorsOfNumber[i] == 3) {
                        isThree = true;
                    }

                    if (factorsOfNumber[i] == 5) {
                        isFive = true;
                    }

                    if (factorsOfNumber[i] == 7) {
                        isSeven = true;
                    }
                } // ends for loop to set the boolean value of test variables

                if (isThree) {
                    generatedString += "Pling"
                } // ends if to check the occurence of 3

                if (isFive) {
                    generatedString += "Plang"
                } // ends if to check the occurence of 5

                if (isSeven) {
                    generatedString += "Plong"
                } // ends if to check the occurence of 7

                if (generatedString == "") {
                    return generatedString + number;
                } else {
                    return generatedString;
                } // ends if conditional to check generated string
            }
        } // ends stringProcessor
};