//business logic
function numberMod(inputtedUserNumber){
var userNumberArray = [];
for (i = 0; i <= userNumberArray.length; i++) {
  userNumberArray.push(i);
  }
  console.log(userNumberArray);
}

//user interface logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var inputtedUserNumber = $("input#userNumberInput").val();
    numberMod(inputtedUserNumber);
  });
});
