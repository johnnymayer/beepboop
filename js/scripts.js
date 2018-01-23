//business logic
var numberMod = function(numberArray){
  numberArray.forEach() {
    if (numberArray % 3 === 0) {
      number = "I'm sorry, Dave.";
    } else if (numberArray.matches("0")) {
      number = "beep";
    } else if (numberArray.matches("1")) {
      number = "boop";
    } else {
      number = number;
    }
  })
};

//user interface logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var inputtedUserNumber = $("input#userNumberInput").val();
    var numberArray = [];
      for(var i = 0; i <= inputtedUserNumber; ++i){
        numberArray.push(i);
      }
    numberMod(numberArray);
    $("#results").text(numberArray.join("-"));
    console.log(numberArray);
  });
});
