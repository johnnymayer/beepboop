$(document).ready(function() {
  $("form#userNumber").submit(function(event){
    event.preventDefault();
    var userEntry = $("input#userEntry").val();
  });
});
