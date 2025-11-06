/*let someArray = ["mike","antal","mark","amir","louiza","jacky"]
let not_found = true;
while(not_found && someArray.length>0)
{
  if(someArray[0]=="louiza")
  {
    not_found=false;
    console.log("person found")
  }
  else{
    someArray.shift();
  }
}

let n1=0;
let n2=1;
let temp;;
let arr=[];
while(arr.length<25)
{
arr.push(n1);
temp = n1+n2;
n1=n2;
n2=temp;

}
console.log(arr);

let max = 5;
let n1 = Math.floor((Math.random()*max))+1

let incorrect=true;
while(incorrect)
{
  let user = Number(prompt("enter a number between 1-5"));
  if(user>n1)
  {
   alert("its too high guess another number")
  }
  else if(user<n1)
  {
    alert("its too low ! Guess another number")
    
  }
  else{
    console.log("You have guesseed right");
    incorrect = false;
  }
}


let n1;
do{
   n1 = Number(prompt("ENter a number"))

}while(!(n1>=0&&n1<=100))
  console.log("number is between 0 to 100")

  let count =0;
  let n1;
  do{
    n1 = Number(prompt("ENter step count"))
    var step = count+n1;
    count=step;
    
  }while(count<=100)
    console.log(count);

 let myWork = [];
    for(let i=1;i<=10;i++)
    {
      if(i%2!=0)
      {
        var st = true
      }
      else{
        var st = false;
      }
      var temp={
        nmae: `lesson ${i}`,
        status: st 
      }
      myWork.push(temp);
    }
    console.log(myWork)

let catalog=[];
for(i=1;i<=5;i++)
{
  var stk = Math.floor(Math.random()*20)+5
  if(stk>10)
  {
    var ava=true;
  }
  else{
    var ava = false;
  }
  var temp={
    name: `item ${i}`,
    stock: stk,
    available: ava
  }
  catalog.push(temp)

}
console.log(catalog)

let gridArray =[];
let cell = 64;
let count=0;
let row=[]
for(i=0;i<=cell;i++)
{
  

  if(i%8==0)
  {
    if(row.length>0)
    {
      gridArray.push(row)
    }
    row=[]
  }
  let temp=count;
  row.push(temp)
  if(count==cell)
  {
    gridArray.push(row)
  }
count++

}

console.log(gridArray)
let arr=[1,2,3,45,66]
for(let i of arr)
{
  console.log(i)
}

let car={
  make:"golf",
  model:"xyz",
  year:2002,
  color:"black",
};

let person={
  name:"swayam",
  age:33,
  mark:2,
};
for(let prop in person)
{
  console.log(prop + person[prop])
}
let arr=["swayam",33,2]
for(let i in arr)
{
  console.log(arr[i])
}

//convert keys of objects to array
let car={
  model:"golf",
  make:"volksvagen",
  color:"black"
  
};
let arr=Object.keys(car);
console.log(arr)
for(i=0;i<arr.length;i++)
{
  console.log(arr[i]+" "+car[arr[i]])
}


//convert values into array
for(let key of Object.values(car))
{
  console.log(key)
}


//convert key and value to array
for(const[key,value] of Object.entries(car))
{
  console.log(key+""+value)
}


let cars=[
  {
    model:"golf",
    make:"volswagen",
    year:1999,
    color:"black"
  },
  {
    model:"picanto",
    make:"xyz",
    year:2020,
    color:"red"
  },
  {
    model:"abc",
    make:"def",
    year:2021,
    color:"black"
  },
  {
    model:"fgh",
    make:"ijk",
    year:2020,
    color:"black"
  },
]
for(i=0;i<cars.length;i++)
{
  if(cars.year>=2020)
  {
    if(cars[i]==="black"){
      console.log(cars[i])
      break;
    }
  }
}
for(let i of cars){
  if(i.color!=="black")
  {
    console.log(i);
  }
}


let count=0;
let groups=[
  ["martin","daniel","kieth"],
  ["margot","marina","ali"],
  ["helen","johnah","sambikos"]
];
for(let i of groups)
{
  for(let j of i)
  {
    if(groups[i][j].startsWith("m")){
    console.log(groups[i][j])
    count++;
    }
    if(count==2)
    {
      break;
    }
  }
}


function sayHello(){
let username=prompt("enter you name")
console.log("hello"+urname)
}
sayHello();
let res=function(){
console.log("ur name")
}
res();

function addTwo(a,b)
{
  return a+b;

}
num1=7
num2=9
let res1=addtwo(num1,num2)
console.log(res1);

let arr=["good","bad","kind","rude"]
function xyz()
{
  let user=prompt("enter ur name")
  let random=Math.floor(Math.random()*arr.length)
  console.log(x+arr[index])
}
xyz();


let arr=[1,2,3,4]
function find(arr,index)
{
  return arr[index]
}
find(arr,1);


let num1=2;
let num2=3;
let operat="-";
function calc(num1,num2,operat)
{
if(operat=="+"){


  return num1+num2;
}
else if(operat=="-")
{
  return num1-num2;
}
else{
  return num1+num2;
}
}
let res=calc(num1,num2,operat);
console.log(res);


let person={
  name:"suvam",
  age:23,
  marks:[1,2,34,5,6],
}
function displayPerson(person)
{
  console.log(person.name)
  console.log(person.age)
  for(i=0;i<person.marks.length;i++)
  {

  }
}


let parking=[];

function display(parking)
{
  let temp=[]
  for(let i=0;i<3;i++)
{
  for(let j=0;j<3;j++)
  {
    let user=Number(prompt("enter 1 or 0"))
    temp.push(user) 
  }
  parking.push(temp)
}
console.log(parking)
}
function count(parking){
  let count1=0;

  for(let i=0;i<3;i++)
{
  for(let j=0;j<3;j++)
  {
    if(parking[i][j]==0)
    {
      count1++
    }
  }
}
console.log("number of available spots is "+count1)
}
display(parking)
count(parking);



let account={holder:"smita",
  balance:2500,
};
let transaction1={
  type:"deposit",
  amount :2500,
}
let transaction2={
  type:"withdraw",
  amount:4000,
}
function processTransaction(account,transaction)
{
let choice=transaction.type;
switch(choice)
{
  case "deposit":
    account.balance=account.balance+transaction.amount;
    break;
  case "withdraw":
    account.balance=account.balance-transaction.amount;
    break;  
}
console.log("Account balance : "+account.balance);
}
 
let user=prompt("enter ur transaction type");
if(user=="transaction1")
{
  processTransaction(account,transaction1)
}
else{
  processTransaction(account,transaction2)
}*/



let date = Number(prompt("enter the date"));
let month = Number(prompt("enter the month"))
let yr = Number(prompt("Enter the year"))

function leap_yr(yr)
{
  if(yr%400==0|| yr%100==0&& yr%4==0)
  {
    return 1;
  }
  else{
    return 0;
  }
}
let months=[31,28,31,30,31,30,31,31,30,31,30,31]
let total=0;
for(i=0;i<month;i++)
{
  total=total+months[i]
}
let total_days= total+leap_yr(yr)+date;
console.log(total_days)




