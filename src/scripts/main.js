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
