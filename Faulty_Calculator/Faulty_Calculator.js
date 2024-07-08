const fault = (num1, num2, choice) => {
    if(choice == 1){
        console.log(num1 + " + " + num2 + " = " + (num1 - num2)); 
    }
    else if(choice == 2){
        console.log(num1 + " - " + num2 + " = " + (num1 / num2)); 
    }
    else if(choice == 3){
        console.log(num1 + " * " + num2 + " = " + (num1 + num2)); 
    }
    else if(choice == 4){
        console.log(num1 + " / " + num2 + " = " + (num1 ** num2)); 
    }
    else if(choice == 5){
        console.log(num1 + " ^ " + num2 + " = " + (num1 * num2)); 
    }
}

const correct = (num1, num2, choice) => {
    if(choice == 1){
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    }
    else if(choice == 2){
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
    }
    else if(choice == 3){
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
    }
    else if(choice == 4){
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
    }
    else if(choice == 5){
        console.log(num1 + " ^ " + num2 + " = " + (num1 ** num2));
    }
}

var num1 = prompt("Enter 1st number: ");
var num2 = prompt("Enter 2nd number: ");
var choice = prompt("Enter any one choice from the following:\n 1 for addition\n 2 for subtraction\n 3 for multiplication\n 4 for division\n 5 for exponential\n: ");
var guess = Math.random();

if (guess < 0.1) {
    fault(num1, num2, choice);
} else {
    correct(num1, num2, choice);
}
