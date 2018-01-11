$(document).ready(function() {
  $("#animal-form").submit(function(event) {
    //console.log("submit triggered");

    var animal = $("#animal").val();

    if (animal === "Silverback Gorilla") {
      $("#silverback").show();
      $("#ocelot").hide();
      $("#springtail").hide();
    } else if (animal === "Ocelot") {
      $("#silverback").hide();
      $("#ocelot").show();
      $("#springtail").hide();
    } else {
      $("#silverback").hide();
      $("#ocelot").hide();
      $("#springtail").show();
    };
    event.preventDefault();
  });
});
