function calculateTotal(discount=0,...rest)
{
  let total=0;
  for(let i in  rest)
  {
    total = total+i;
  }
  return total-discount;
}
calculateTotal(10,20,30,40);