let ageInput = prompt("Enter your age:");
let age = parseInt(ageInput);

if (isNaN(age)) {
    console.log("Please enter a valid number.");
} else {
    console.log("Valid age entered:", age);
}