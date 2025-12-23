let eventDate = new Date("December 31, 2025 23:59:59");
let today = new Date();

let diff = eventDate - today; 

let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
let minutes = Math.floor((diff / (1000 * 60)) % 60);

console.log(`Time left: ${days} days, ${hours} hours, ${minutes} minutes`);