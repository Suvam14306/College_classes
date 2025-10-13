let serial = prompt("Enter your first character")
switch(serial)
{
  case 'B':
    case 'b':
      console.log("Battleship");
      break;
  case 'C':
    case 'c':
      console.log("Cruiser");
      break;
  case 'D':
    case 'd':
      console.log("Destroyer");
      break;
  case 'F':
    case 'f':
      console.log("Frigate");
      break;
  default:
    console.log("UNknown");

  
}