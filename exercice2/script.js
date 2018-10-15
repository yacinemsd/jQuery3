var count = 0;
 $('#button1').click(function() {
    count++;
    $('#counter').html('Nombre de click : '+count);
  });
  
   $('#button2').click(function() {
      count--;
      $('#counter').html('Nombre de click : '+count);
    });
