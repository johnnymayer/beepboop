//business logic
var numberMod = function(numberArray){
  if (numberArray % 3 === 0) {
    $("#results").text("I'm sorry, Dave.");
  } else if (numberArray.includes("0")) {
    $("#results").text("beep");
  } else if (numberArray.includes("1")) {
    $("#results").text("boop");
  } else {
    $("#results").text(numberArray);
  }
};

//user interface logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var inputtedUserNumber = $("input#userNumberInput").val();
    var numberArray = [];
      for(var i = 0; i <= inputtedUserNumber; ++i){
        numberArray.push(i.toString());
      }
    $("#results").text(numberArray.join("-"));
    numberMod(numberArray);
    console.log(numberArray);
  });
});
