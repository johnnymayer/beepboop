//business logic
var numberMod = function(number){
  if (number % 3 === 0) {
    return "Dave";
  } else if (/[0]/.test(number)) {
    return "beep";
  } else if (/[1]/.test(number)) {
    return "boop";
  } else {
     return number;
  }
}
//user interface logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var inputtedUserNumber = $("input#userNumberInput").val();
    var numberArray = [];
      for(var i = 0; i <= inputtedUserNumber; ++i){
        numberArray.push(numberMod(i));
      }
    $("#results").text(numberArray.join("-"));
    console.log(numberArray);
  });
});
