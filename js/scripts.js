$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    $(".userNumber").text(userNumber);
    $("#result").show();
  });
});
