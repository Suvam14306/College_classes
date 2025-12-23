function bankACcount(balance)
{
  return{
    deposit:function(amount)
    {
      balance += amount;
      console.log("new balance"+balance)
    },
    withdraw:function(amount)
    {
      balance -= amount;
      console.log("ne wbalnce"+balance)
    },
    checkBlance:function()
    {
      console.log("updated balance is "+balance)
    }
  }
}
let acc = bankACcount(1000)
acc.deposit(200)
acc.withdraw(100)
acc.checkBlance();