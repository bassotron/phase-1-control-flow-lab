function scuberGreetingForFeet(distance){
if (distance <= 400) {
      return "This one is on me!";
    }
  else if (distance <= 2499 && distance >= 2000) {
       return "I will gladly take your thirty bucks.";
  }
  else if (distance >= 2500) {
    return "No can do.";
  
  }
}

function ternaryCheckCity(cityName){
   if (cityName === "NYC") {
     return "Ok, sounds good."
   }
   else if (cityName = "Pittsburgh") {
      return "No go."
   
   }
    }

   

  
function switchOnCharmFromTip(tipAmount){
  if (tipAmount === "generous") {
   return "Thank you so much."
  }

   else if (tipAmount === "not as generous") {
        return "Thank you."
}
    else if (tipAmount === "thanks for everything") {
      return "Bye."
    }
}


