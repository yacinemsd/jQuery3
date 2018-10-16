$("#button1").click(function(){ // lancement de la focntion au clic sur button1
  if ($("#rectangle").height()<100){ // on test sur height de rectancle est inferieure à 100px
    $("#rectangle").height("+=10px");
  } else {
    $("#rectangle").height("10px");
  }
});

$("#button2").click(function(){
  $("#rectangle").css("background-color","green");
});

$("#button3").click(function(){
  $("#rectangle").css("background-color","blue");
});

$("#button4").click(function(){
  $("#rectangle").hide();
});

$("#button5").click(function(){
  $("#rectangle").show();
});
