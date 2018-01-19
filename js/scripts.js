$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var numberMod = Array.from(number);
    console.log(numberMod);

    $(".number").text(number);

    if (!result) {
      $(".not").text("I'm sorry, Dave. I can't do that.");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
