const x = parseFloat(prompt("Enter the value of x"));


function math (x) {
    let number1 = Math.round(Math.sqrt(Math.pow(Math.round(Math.abs(x)), 2)));
    let number2 = Math.round(number1/5);

    if (number1 < number2) {
        chosenNumber = number1;
    }else {
        chosenNumber = number2;
    }

    if (chosenNumber % 2 == 0) {
        chosenNumber =+ 5;
    }else {
        chosenNumber =+ 3;
    }

    return document.write(Math.pow(chosenNumber, chosenNumber));
        
    
}


math(x);