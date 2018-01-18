$(document).ready(function() {
    $(".dropdown-button").dropdown();
    $('.parallax').parallax();
});

$(".button-collapse").sideNav();


$('.carousel').carousel({
  padding: 200    
});
autoplay()   
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 3000);
}

//Media
$(document).ready(function(){
  $('.materialboxed').materialbox();
});





