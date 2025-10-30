let sales=[10,20,30,40,50,60,70];
let day=["monday","tuesday","wednesday","Thursday","friday","saturday","sunday"]
let sum=0;
let avg=0;
let high=sales[0];
let low = sales[0];
let index1=0;
let index2=0;
for(i=0;i<sales.length;i++)
{
  sum=sum+sales[i]
  if(high<=sales[i])
  {
    high=sales[i];
    index1=i;
  }
   if(low>=sales[i])
  {
    low=sales[i];
    index2=i;
  }
}
avg=sum/sales.length;
console.log("Total sales is "+sum)
console.log("The average sale is "+avg)
console.log("HIghest sale was on "+day[index1])
console.log("lowest sale was on "+day[index2])
