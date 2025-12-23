let marks = [45.7, 89.4, 32.6, 50.5];

let rounded = marks.map(m => Math.round(m));
let roundedUp = marks.map(m => Math.ceil(m));

console.log("Rounded:", rounded);
console.log("Rounded Up:", roundedUp);