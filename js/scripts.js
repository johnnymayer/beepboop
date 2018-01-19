var userEntryMod = function(userEntry) {
  if (userEntry % 3 {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#userEntry").submit(function(event) {
    event.preventDefault();
    var userNumber = $(input#userNumber).val();
    var result = userEntryMod(userEntry);
    });
    $("#result").text(result);
  });
