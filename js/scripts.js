function beep(userArray) {
    if(userArray.contains("0"))
    { return alert("BEEEEEEP!");
  } else {
    return userNumber;
  }
}
$(document).ready(function() {
  $("form#userEntry").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    var userArray = Array.from(userNumber);
    console.log(userArray);
  });
});
