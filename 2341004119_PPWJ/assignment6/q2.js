function studentReport(name,...marks)
{
  function avg(...marks)
  {
    let total=0;

    for(let i in marks)
    {
     total = total+i
    }
    let average = total/marks.length;
  }
  let res = avg(...marks);
  if(res>40)
  {
    console.log("pass")
  }
  else{
    console.log("fail")
  }
}

studentReport("SUVAM",10,20,30,80);