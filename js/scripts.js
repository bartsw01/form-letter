$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);

    $("#letter").show();

   event.preventDefault();
  });
});
