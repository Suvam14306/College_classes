
let units = Number(prompt("Enter total units Consumed"));


switch(true)
{
  case(units>=0 && units<=100):
  console.log("Total electricity bill is "+(units*5));
  break;
  case(units>=101 && units<=200):
  console.log("Total electricity bill is "+(500+((units-100)*7)));
  break;
  case(units>200):
  console.log("Total electricity bill is "+(1200+((units-200)*10)));
  break;
  default:
    console.log("invalid input")
    break;
}


