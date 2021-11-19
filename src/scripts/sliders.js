$(document).ready(function(){
  $('.pl-slice').slick({
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:"",
    nextArrow: 
    "<button type='button' class='slick-next cs-next'></button>",
  });
});

$(document).ready(function(){
  $('.slick-current').children().children().toggleClass("recipes-around")
});