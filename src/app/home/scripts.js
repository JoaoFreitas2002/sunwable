$(function Scroll() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('nav').addClass('.changeColor')
    } else {
      $('nav').removeClass('.changeColor')
    }
  });
});
