let cart = ["Shoes", "Shoes", "Bag", "Watch", "Shoes", "Bag"];

let uniqueCart = cart.filter((item, index) => cart.indexOf(item) === index);

console.log(uniqueCart);