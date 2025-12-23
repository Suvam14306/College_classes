let bday = new Date(1998, 6, 15);

let day = bday.getDate();
let month = bday.toLocaleString("default", { month: "long" });
let year = bday.getFullYear();

console.log(`${day} ${month} ${year}`);