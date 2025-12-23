let y = function(eventname,seats)
{
  console.log("Booking confirmed for" +eventname+seats)
}

function bookTickets(eventname,seats,execute)
{
  if (seats>5)
  {
    console.log("Booking failed")
  }
  else{
    y(eventname,seats)
  }
}
bookTickets("comedy show",4);