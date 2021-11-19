$(document).ready(function(){
  $('.pl-slice').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow:"",
    nextArrow: 
    "<button type='button' class='slick-next cs-next'></button>",
  });
});

$(document).ready(function(){
  $('.slick-current').children().children().toggleClass("recipes-around")
});