$('card').ready(function(){
  for(i=1; i<21; i++){
    $('#card_holder').append('<div class="card"><p>'+i+'</p></div>');
  };
	$('card').click(function(){
		$(this). find("p").css("opacity;1")
  
	});
  });
