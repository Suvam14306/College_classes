let arr=[1,2,3,4,5,6,7,8,9];
let user=Number(prompt("ENter a number from 1 to 6"))
switch(user)
{
  case 1:
    for(let i of user)
    {
      console.log(arr[i])
    }
    break;
  case 2:
    let sum =0;
    let min = arr[0];
    let max=arr[0];
    for(i=0;i<arr.length;i++)
    {
      sum=sum+arr[i];
      if(arr[i]>=max)
      {
        max=arr[i]
      }
      if(arr[i]<=min)
      {
        min=arr[i]
      }
    }
    console.log("sum is "+sum+" maximum is "+max+" minimum is "+min);
    break;
  case 3:
    let eve=0;
    let od=0;
    for(i=0;i<arr.length;i++)
    {
      if(arr[i]%2==0)
      {
        eve++;
      }
      else{
        od++;
      }
    }
    console.log("even number is "+eve+" odd number is "+od)
    break;
  case 4:
    for(i=arr.length;i>0;i--)
    {
      console.log(arr[i])
    }
    break;
  case 5:
    let input=NUmber(prompt("Enter a number to search in the array"))
    for(i=0;i<arr.length;i++)
    {
      if(arr[i]==input)
      {
        console.log("number is found in index "+i)
      }
      else{
        console.log("number is not present")
      }
    }
    break;
  case 6:
    for(i=0;i<arr.length;i++)
    {
      for(j=i+1;j<arr.length;j++)
      {
        if(arr[i]==arr[j])
        {
          delete arr[j];
        }
      }
      console.log(arr[i])
    }


}