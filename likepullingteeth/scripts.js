
$(".tooth").click(function(){

  $(this).next("p").css("opacity", "1");
  $(this).hide();
  $( ".draggable" ).draggable();

});

$( function() {
  $( ".draggable" ).draggable();
} );





