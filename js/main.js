$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots:false
    });
});
$("#prevBtn").click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
});
$("#nextBtn").click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
});