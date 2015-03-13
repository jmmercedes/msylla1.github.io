$(document).ready(function(){
  var my_array = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10"];
  function shuffle(array) {
    var counter = array.length, temp, index;
  //This gives the list of cards that are to appear.
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
  var new_array=shuffle(my_array);
  var first_click = "a";
  var second_click = "a";
  var click_count = 0;
  for(i in my_array){
    $('#card_holder').append('<div class="card"><p>'+my_array[i]+'</p></div>');
  }
  $('.card').click(function(){
    if(click_count == 0){
    $(this).find('p').css("opacity", 1);
    $(this).find('p').addClass('clicked');
    first_click = $(this).find('p').html();
    click_count = 1;
    //This tells us what should happen if two of the cards matches
    }
    else {
      //Tells us that the cards should turn aruond if the cards don't match.
    $(this).find('p').css("opacity", 1);
    $(this).find('p').addClass('clicked');
    second_click = $(this).find('p').html();
    click_count = 0;
      if (first_click == second_click){
        $('.clicked').css("opacity", 1).removeClass('clicked');
      }
      else {
        setTimeout(function(){$('.clicked').css('opacity', '0').removeClass('clicked')}, 500);
      }
      click_count = 0;
    }
    
  })
})
