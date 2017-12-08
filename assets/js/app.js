$(document).ready(function() {
    $(".dropdown-button").dropdown({ hover: false });
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

// Form





