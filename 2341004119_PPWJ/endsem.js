/*function add(para1,...para2)
{
  console.log(para1+para2);
}
add("hi","there","how are u");


//problem excercise 6.4
let arr=[];
for(let i=1;i<=10;i++)
{
  let val1 = 5*i;
  let val2= i*i;
  let res = cal(val1,val2,"+")
  arr.push(res)
}
 function cal(a,b,op)
{
  if(op=="+")
  {
    return res=a+b;
  }
  else{
    return res = a-b;
  }
}

//excercis 6.5
let value = "1000";
(function()
{
  value="12345"
  console.log(value)
})();

let res = (()=>{
  value = "3333"
})();

console.log(value + " value");


//recursive function
function getRecursive(nr)
{
console.log(nr);
if(nr>0)
{
  getRecursive(--nr)
}

}
getRecursive(3);


//nested function
function outer()
{
  let msg="Hello";
  function inside()
  {
    console.log("msg")
  }
  inside();
}
outer();


//nested with return 
function addnos(a)
{
  function add(b)
  {
    return a+b;
  }
  return add;
}
let res = addnos(5)
console.log(res(7));


//excercise 6.7
let start = 10;
function show(a)
{
  console.log(a)
  if(a<1)
  {
    return;
  }
  else{
    return show(a--);
  }
}


//anonymous function
let x = function()
{
  console.log("not a secret")
}
x();
//IIFE
(function(){
  console.log("iife")
})();


//callback function
function doit(execute)
{
  execute();
  console.log("inside doit function")
}
doit(y);
setTimeout(y,1000);



class person{
  constructor(firstName,lastName)
  {
    this.firstName=firstName;
    this.lastName=lastName;
  }
}
let p = new person("suvam","Das");
let p1 = new person("ramesh","xyz")
console.log(p.firstName);
console.log("hi",p.firstName);
let p2 = new person("rakesh")
console.log(p2.firstName,p2.lastName)  //rakesh undefined


//default value
class person1{
  constructor(firstName,lastName="abc")
  {
    this.firstName=firstName;
    this.lastName=lastName;
  }
}
let p3 = new person3("rakesh")//rakesh abc 


//excercise 7.1
class person2{
  constructor(firstName,lastName)
  {
    this.firstName=firstName;
    this.lastName=lastName;
  }
}
let frnd1 = new person2("hello","Suvam","Das")
let frnd2 = new person2("hello" ,"shubram","jeet")


//methods
class person1{
  constructor(firstName,lastName="abc")
  {
    this.firstName=firstName;
    this.lastName=lastName;
  }
  greet()
  {
    console.log("hello",this.firstName)
  }
  compliment(name,object)
  {
   return "thats wonderful" +object+ "name"
  }
}
let p3 = new person1("rakesh")
p3.greet();
let p4 = p3.compliment("harry","hat")


//excercise 7.2
class person2{
  constructor(firstName,lastName)
  {
    this.firstName=firstName;
    this.lastName=lastName;
  }
  fullName()
  {
    console.log(this.firstName+this.lastName)
  }
}

let frnd1 = new person2("hello","Suvam","Das")
let frnd2 = new person2("hello" ,"shubram","jeet")

let person1 = frnd1.fullName();
let person2 = frnd2.fullName();


//getter and setter
class person2{
  #firstName
  #lastName
  constructor(firstName,lastName)
  {
    this.#firstName=firstName;
    this.#lastName=lastName;
  }
  greet()
  {
    console.log("hello",this.#firstName)
  }
  get firstName()
  {
    return this.#firstName;
  }
  get lastName()
  {
    return this.#lastName;
  }
  set firstName(firstName)
  {
    if(firstName.startsWith("M"))
    {
     this.#firstName=firstName
    }
    else{
      this.#firstName="M"+firstName
    }
    
  }
  set lastName(lastName)
  {
    this.#lastName=lastName
  }
}
let frnd1 = new person2("hello"+"Suvam","Das")
person2.greet()
console(person2.firstName)
person2.firstName="xyz"


class vehicle{
  constructor(color,currentspeed,maxspeed)
  {
    this.color=color;
    this.currentspeed=currentspeed;
    this.maxspeed=maxspeed;
  }
  move()
  {
    console.log("moving with a speed"+ this.currentspeed)
  }
  accelerate(amount)
  {
    this.currentspeed+=amount;
  }
}

class motorcycle extends vehicle{
  constructor(color,currentspeed,maxspeed,fuel)
  {
    super(color,currentspeed,maxspeed);
    this.fuel=fuel;
  }
  dowheels()
  {
    console.log("driving on wheels")
  }
}

let m = motorcycle("black",100,120,"petrol");
console.log(m.accelerate(20))



class person1{
  constructor(firstName,lastName="abc")
  {
    this.firstName=firstName;
    this.lastName=lastName;
  }
}
person1.prototype.introduce=function()
{
  console.log("hi i am "+this.firstName)
}



//exercise 7.3
class Animal{
  constructor(name,sounds)
  {
    this.name=name;
    this.sounds=sounds;
  }
  show()
  {
    console.log(this.name+ " " + this.sounds)
  }
}
Animal.prototype.legs = function()
{
  return this.name + "has 4 legs"
}
let cat = new Animal("cat","meow");
let dog = new Animal("dog", "bark");
dog.speak;
console.log(dog.legs)


let s = "Hello";
console.log(s.concat("there").toUpperCase().replace("THERE","you").concat("YOU are amazing"))


let x=7;
console.log(Number.isNaN(x));
console.log(isNan(x));


//excercise 8.1
let str ="How's%20it%20going%3F"
console.log(decodeURIComponent(str))
let str1= "How's it going?"
let res = encodeURIComponent(str1);
let uri = "http://www.basescripts.com?=Hello World"
console.log(encodeURI(uri));


let s1="6";
let s2=parseInt(s1);
let s3="7.6";
let s4=parseFloat(s3)//7.6
let s5="Ob101";
let s6=parseInt(s5)
console.log(s2)
console.log(s4)
console.log(s6)


//array methods
let arr= ["fgh",4,5.6,"nhj",true]
function print(elememt,index){
  console.log(Element,"is at position",index);
}
arr.forEach(print)
//filter
function chk(elememt,index)
{
  return typeof elememt=="string";
}
let f = arr.filter(chk);
console.log(f);
//every
console.log(arr.every(chk));//check is every elemnt is a string it will print no

let arr2=[5.6,4,'hello',5,7,true]
arr2.copyWithin(0,3,5)
Console.log(arr2)



//excercise 8.2
let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence",
"Mike", "Laurence", "Mike", "Laurence", "Mike"];
let arr2 = arr.filter ( (value, index, array) => {
console.log(value,index,array.indexOf(value));
return array.indexOf(value) === index;
});
console.log(arr2)


//excercise 8.3
let Arr = [1,4,5,6];
let Arr1 = Arr.map(function(ele){
return ele * 2;
});
console.log(Arr1);
let Arr2 = Arr.map((ele)=> ele*2);
console.log(Arr2);*/


