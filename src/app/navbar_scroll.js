$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".fixed-top").css("background", "red");
    } else {
      $(".fixed-top").css("background", "transparent");
    }
  })
})
