$(".food-btn").on("click", function () {
  $(this).parent().parent().next().toggleClass("dsk-show");
});

$(".dsk-close").on("click", function () {
  $(this).parent().parent().parent().toggleClass("dsk-show");
});
let dem = 0;
$(".btn-img").on("click", function () {
  
  dem++;
  console.log(dem);
  if (dem % 2 === 0) {
    const sll = $(".img-small .img-item img").length;
    $(".img-modal").text(`${sll.toString()}+`);
    $(".img-modal").css("background-color", "");
    let flag = 7;
    while (flag <= sll) {
      $(`.img-small .img-item:nth-child(${flag})`).removeClass("show-img");
      $(`.img-small .img-item:nth-child(${flag})`).addClass("an-img");
      flag++;
    }
  } else {
    const sl = $(".img-small .img-item img").length;
    $(".img-modal").text("");
    $(".img-modal").css("background-color", "rgb(255 255 255 / 16%)");
    let flag = 7;
    while (flag <= sl) {
      $(`.img-small .img-item:nth-child(${flag})`).removeClass("an-img");
      $(`.img-small .img-item:nth-child(${flag})`).addClass("show-img");
      flag++;
    }
  }
});

$(document).ready(function () {
  const sl = $(".img-small .img-item img").length;
  $(".img-modal").text(`${sl}+`);
  let flag = 7;
  while (flag <= sl) {
    $(`.img-small .img-item:nth-child(${flag})`).removeClass("show-img");
    $(`.img-small .img-item:nth-child(${flag})`).addClass("an-img");
    flag++;
  }
});
