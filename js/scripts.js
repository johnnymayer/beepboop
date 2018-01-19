$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["userNumber", "person2", "animal", "exclamation", "verb", "noun", "adjective"];

    blanks.forEach(function(blank) {
      var userInput = $("input#userNumber").val();
      $("." + blank).text(userInput);
    });

    $("#result").show();

    event.preventDefault();
  });
});
