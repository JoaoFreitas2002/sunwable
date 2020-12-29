$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll > 100) {
    document.getElementById("nav").style.background = "blue !important";
  }
});
