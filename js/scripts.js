//business logic
var userNumberMod = function(userNumber) {
  if (userNumber % 3) {
    alert("I'm sorry, Dave. I can't do that.");
  } else if (userNumber.matches(/[0]/)) {
    alert("Beep!");
  } else if (userNumber.matches(/[1]/)) {
    alert("Boop!");
  } else {
    alert("Nada.");
  }
}

//user interface logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    $(".userNumber").text(userNumber);
    $("#result").show();
  });
});
