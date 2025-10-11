/*bool=[true,true,false,true]
console.log(bool.length)
console.log(bool.length-1)
arr2=[]
console.log(arr2.length)
numbers=[12,24,35]
numbers[5]=48;
console.log(numbers.length)
console.log(numbers)
 let shopping=["milk","bread","apples"]

 shopping[1]="bananas";
console.log(shopping.length)
console.log(shopping);
let arrOfShapes=["circle","triangle","rectangle"]
arrOfShapes.splice(2,"square","trapezium")
console.log(arrOfShapes)
 let animals=["dog","horse","cat","platypus","dog"]
 let lastDog =animals.lastIndexOf("dog")
 console.log(lastDog)
 let shopping=[]
 shopping.push("Milk","Bread","Apples")
 console.log(shopping)
 shopping.splice(1,1,"Bananas","Eggs")
 console.log(shopping)
 shopping.pop()
 console.log(shopping)
 shopping.sort()
let index1=shopping.indexOf("Milk")
console.log(index1)
shopping.splice(1,0,"Carrots","Lettuce")
console.log(shopping)
let arr=["juice","pop"]
let newShop=shopping.concat(arr,arr)
console.log(newShop)
let lst=newShop.lastIndexOf("pop")
console.log(lst)
console.log(newShop)
let activity=prompt("enter ur activity");
switch(activity){
  case "breakfast":
  console.log("it is 7 00 am");
  break;
  case"get up":
  console.log("it is 6 30 am");
  break;
  case"Drive to work":
  console.log("it is 8 00 am");
  break;
  case"lunch":
  console.log('it is 12 00 pm');
  break;
  case "Drive home":
  console.log("it is 5 00pm");
  break;
  default:
    console.log("wrong input")
    break;
}

//combining cases
let character=prompt("enter ur chhoice")
switch(character){
  case 'A':
  case 'E':
  case 'I':
    case 'O':
  case 'U':
    console.log("vowel")
    break;
    default:
    console.log("consonant")
  
}

//RANDOM NUMBER
let random= Math.floor(Math.random()*6);
switch(random)
{
  case 0:
    console.log("U have selected 0")
    break;
    case 1:
    console.log("U have selected 1")
    break;
    case 2:
    console.log("U have selected 2")
    break;
    case 3:
    console.log("U have selected 3")
    break;
    case 4:
    console.log("U have selected 4")
    break;
    case 5:
    console.log("U have selected 5")
    break;
    default:0
    console.log("nothing")
    break;


}*/
//4.5

//let prize=Number(prompt("enter a number between 0-10"));
let prize=Math.floor(Math.random()*10)
let message="My selection:"
switch(prize)
{
  case 0:
    case 3:
      case 4:
        case 5:
    console.log( message+"Gold")
    break;
  case 1:
    case 6:
      case 7:
        case 8:
      console.log(message+"silver")
      break;
  case 2:
    case 9:
      case 10:
      console.log(message+"Bronze")
      break;
  default:
        console.log(message+"no prize")
        break;
}




