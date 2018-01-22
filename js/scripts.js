//business logic
var checkDivisible = function(userNumber) {
    var isDivisible = false;
  if (userNumber % 3 === 0) {
    return true;
  } return isDivisible;
};

var checkBeepBoop = function(userNumberArray) {
    var isBeep = false;
  for (var i = 0; i < userNumberArray.length; i++) {
    if (userNumberArray[i] === "0") {
      return true;
    } else if (userNumberArray[i] === "1") {
      return false;
    }
  }
};
//user interface logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    var userNumberArray = Array.from(userNumber);
    var divisible = checkDivisible(userNumber);
    var isBeep = checkBeepBoop(userNumberArray);
    console.log(divisible, isBeep);
    if (divisible === true) {
      $("#result").show();
      $(".userNumberDisplay").text("I'm sorry, Dave. I can't do that.");
    } else if (isBeep === true) {
      $("#result").show();
      $(".userNumberDisplay").text("BEEP");
    } else if (isBeep === false) {
      $("#result").show();
      $(".userNumberDisplay").text("BOOP");
    } else {
      $("#result").show();
      $(".userNumberDisplay").text(userNumber);
    }
    });
  });
