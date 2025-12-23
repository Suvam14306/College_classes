let name = "John & Sons";

let encoded = encodeURIComponent(name);
console.log("Encoded:", encoded);

let decoded = decodeURIComponent(encoded);
console.log("Decoded:", decoded);