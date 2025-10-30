let arr=[];
let value=3;
let temp=[];
for(i=1;i<=value;i++)
{
  let temp=[];
  for(j=1;j<=10;j++)
  {
    temp.push(i*j)
  }
  arr.push(temp)
}
console.log(arr);