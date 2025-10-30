let marks=[
  [20,30,40],
  [50,60,40],
  [23,45,78],
];
let sum=0;
for(i=0;i<marks.length;i++)
{
  sum=0;
  for(j=0;j<marks[i].length;j++)
  {
    sum=sum+marks[i][j];
    
  }
  console.log("Student "+i+" scored: "+sum)
}