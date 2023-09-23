function scuberGreetingForFeet(number){
  let result;
  
  if(number<=400)
    result='This one is on me!';
  else if (number<= 2000)
    result='That will be twenty bucks.';
  else if (number<=2500)
  result = 'I will gladly take your thirty bucks.';
  else
  result='No can do.';
  
    return result;
}

function ternaryCheckCity(cityName){
return cityName==='NYC'?'Ok, sounds good.':"No go.";
}

function switchOnCharmFromTip(tipType){
  let feedback;
  switch(tipType){
    case 'generous':
      feedback='Thank you so much.';
      break;
    case 'not as generous':
      feedback='Thank you.';
      break;
    default:
      feedback='Bye.';
  }
  return feedback;
}