let students = ["Ali", "Meera", "Ravi", "Ali", "Sara"];


let allStrings = students.every(s => typeof s === "string");
console.log("All are strings:", allStrings);

students.copyWithin(0, students.length, students.length); 
students[0] = "Guest1";
students[1] = "Guest2";

console.log(students);