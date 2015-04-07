$(document).ready(function(){

//alert(" This JQ is working");	

$(function() {  
   var pull        = $('#pull');  //what element do we want to click on
      menu        = $('nav ul');  //what is the actual menu
      menuHeight  = menu.height(); //get the height of the menu   
  
    $(pull).on('click', function(e) {  //listen for the user to click on our menu button
        e.preventDefault();  //prevent the default behavior for an anchor
        menu.slideToggle();  //if the menu is up slide it down. If it's alreayd down, slide it up. 
    }); 

});  

	$('.button').click(function (){

		$(this).parent().parent().next('ul').slideToggle();

	});

  $("#slider").easySlider({
    auto: true,
    continuous: true,
    nextId: "slider1next",
    prevId: "slider1prev"
  });
  $("#slider2").easySlider({ 
    numeric: true
  });




});

