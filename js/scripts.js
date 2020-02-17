$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var noun1Input = $("input#noun1").val();
    var adjective1Input = $("input#adjective1").val();
    var adjective2Input = $("input#adjective2").val();
    var adverb1Input = $("input#adverb1").val();
    var verb1Input = $("input#verb1").val();
    var adjective3Input = $("input#adjective3").val();
    var noun2Input = $("input#noun2").val();
    var adjective4Input = $("input#adjective4").val();
    var noun3Input = $("input#noun3").val();
    var noun4Input = $("input#noun4").val();
    var verb2Input = $("input#verb2").val();
    var noun5Input = $("input#noun5").val();
    var adjective5Input = $("input#adjective5").val();

    $(".noun1").append(noun1Input);
    $(".adjective1").append(adjective1Input);
    $(".adjective2").append(adjective2Input);
    $(".adverb1").append(adverb1Input);
    $(".verb1").append(verb1Input);
    $(".adjective3").append(adjective3Input);
    $(".noun2").append(noun2Input);
    $(".adjective4").append(adjective4Input);
    $(".noun3").append(noun3Input);
    $(".noun4").append(noun4Input);
    $(".verb2").append(verb2Input);
    $(".noun5").append(noun5Input);
    $(".adjective5").append(adjective5Input);

    $("#story").show();

    event.preventDefault();
  }); 
});    