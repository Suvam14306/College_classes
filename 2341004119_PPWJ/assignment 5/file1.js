let user = Number(prompt("enter the security code"));
console.log("security code "+user)
let sum=0;
while(user>0)
{
  let temp = user%10;
  sum = sum+temp;
  user=Math.floor(user/10);
}
let flag=0;
for(i=0;i<sum/2;i++)
{
  if(sum%i==0)
  {
    flag=1;
    break;
  }
}

console.log("sum is "+sum)
if(flag==0)
{
  console.log("it is not a prime number")
}
else{
  console.log("it is a prime number")
}