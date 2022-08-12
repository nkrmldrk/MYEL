
$('#btn-hide').click(function(){
    $('.info').slideToggle();
});

$("#menubtn").click(function(){
    $(".left-menu-adaptive").slideToggle();
    $('.right-menu-adaptive').hide();      
});

$("#personbtn").click(function(){
    $(".right-menu-adaptive").slideToggle();
    $('.left-menu-adaptive').hide();      
});

//  CAROUSEL   

$('.shop-carousel').each(function () {
    var owl = $(this).find('.owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
      
    $(this).find('#btn-left').on('click', function () {
        owl.trigger('prev.owl.carousel');
    });
      
    $(this).find('#btn-right').on('click', function () {
        owl.trigger('next.owl.carousel');
    });
});

//  POPUP

$(document).ready(function($) {
    $('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});
	
	$('.popup-close-btn').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});

});

$('#btn-submit').click(function(e){
    e.preventDefault();
});

// TABS

$(function() {
	var tab = $('.tabs-container .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	$('.tabs-container .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.tabs-container .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	$('.tabs-target').click(function(){
		$('.tabs-container .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
	});
	
	if(window.location.hash){
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});