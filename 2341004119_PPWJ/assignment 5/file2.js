let user = prompt("enter the pin");
let reverse= "";
for(i=user.length-1;i>=0;i--)
{
  reverse=reverse+user[i];
}
console.log("original number is "+user)
console.log("new number is "+reverse)