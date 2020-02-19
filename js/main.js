$(document).ready(function() {

  $(".card-header-icon").click(function() {
    $(this).parent().next().toggle();
    $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
    $('html, body').animate({
        scrollTop: $(this).offset().top
    }, 500);
  });
});
