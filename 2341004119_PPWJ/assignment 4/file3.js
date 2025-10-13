let purchase = Number(prompt("Enter your purchase"));
if(purchase>=100)
{
  console.log("Discount is Rs20 and Final price is "+(purchase-20))
}
else if(purchase >=50 && purchase<100)
{
  console.log("Discount is Rs10 and Final price is "+(purchase-10))
}
else if(purchase <50 && purchase>=0)
{
  console.log("No Discount and Final price is "+(purchase))
}
else{
  console.log("Invalid Input! Purchase amount cannot be negative")
}