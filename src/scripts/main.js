 $(".food-btn").on("click", function() {
   $(this)
    .parent()
    .parent()
    .next().toggleClass("dsk-show")
 });

 $(".dsk-close").on("click", function() {
   $(this)
    .parent()
    .parent()
    .parent().toggleClass("dsk-show")
 });

 $('.cs-next').on("click", function() {
   console.log("this");
  //  $(this)
  //   .prev()
  //   .children()
  //   .children(".slick-current")
  //   .children()
  //   .children()
  //   .toggleClass("recipes-around")
 });
