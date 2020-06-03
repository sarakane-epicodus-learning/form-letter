$(document).ready(function(){
  $("#nameForm").submit(function() {
    const nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#letter").show();

    event.preventDefault();
  });
});