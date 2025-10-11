const arr=["rock","paper","scissors"]
let player1= Math.floor(Math.random()*3)
let player1choice=arr[player1]
let player2= Math.floor(Math.random()*3)
let player2choice=arr[player2]
console.log("player 1 choice is "+player1choice +" player 2 choice is " +player2choice)
if(player1choice==player2choice)
{
  console.log("Tie")
}
else if((player1choice=="rock"&&player2choice=="paper")||(player1choice=="paper"&&player2choice=="scissors")||(player1choice=="scissors"&&player2choice=="rock"))
{
  console.log("player 2 wins")
}
else 
{
  console.log("player 1 wins")
}
