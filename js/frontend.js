// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}


$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

jQuery(document).ready(function() {	

	"use strict";

    var POINT = window.POINT || {};
    /* ==================================================
     Owl Carousel
     ================================================== */
    POINT.OwlCarousel = function () {
        $('.owl-carousel').each(function () {
            var carouselInstance = $(this);
            var carouselColumns = carouselInstance.attr("data-columns") ? carouselInstance.attr("data-columns") : "1"
            var carouselitemsDesktop = carouselInstance.attr("data-items-desktop") ? carouselInstance.attr("data-items-desktop") : "4"
            var carouselitemsDesktopSmall = carouselInstance.attr("data-items-desktop-small") ? carouselInstance.attr("data-items-desktop-small") : "3"
            var carouselitemsTablet = carouselInstance.attr("data-items-tablet") ? carouselInstance.attr("data-items-tablet") : "2"
            var carouselitemsMobile = carouselInstance.attr("data-items-mobile") ? carouselInstance.attr("data-items-mobile") : "1"
            var carouselAutoplay = carouselInstance.attr("data-autoplay") ? carouselInstance.attr("data-autoplay") : false
            var carouselPagination = carouselInstance.attr("data-pagination") == 'yes' ? true : false
            var carouselArrows = carouselInstance.attr("data-arrows") == 'yes' ? true : false
            var carouselSingle = carouselInstance.attr("data-single-item") == 'yes' ? true : false
            var carouselStyle = carouselInstance.attr("data-style") ? carouselInstance.attr("data-style") : "fade"

            carouselInstance.owlCarousel({
                items: carouselColumns,
                autoPlay: carouselAutoplay,
                navigation: carouselArrows,
                pagination: carouselPagination,
                itemsDesktop: [1199, carouselitemsDesktop],
                itemsDesktopSmall: [979, carouselitemsDesktopSmall],
                itemsTablet: [768, carouselitemsTablet],
                itemsMobile: [479, carouselitemsMobile],
                singleItem: carouselSingle,
                navigationText: ['<i class=\'off\'></i>', "<i class='off'></i>"],
                stopOnHover: true,
                lazyLoad: true,
                transitionStyle: 'carouselStyle'
            });
        });
    };
    POINT.OwlCarousel();

    WebFont.load({
        google: {
          families: ['Merriweather:700i,900i|Poppins:300,400,400i,700,700i']
        }
    });

    jQuery('.animate').waypoint(function () {
        var animation = jQuery(this).attr("data-animate");
        var delay = jQuery(this).attr("data-animation-delay");
        var duration = jQuery(this).attr("data-animation-duration");
        //console.log(delay);
        jQuery(this).addClass(animation);
        jQuery(this).css({"animation-delay": delay + "ms", "-webkit-animation-delay": delay + "ms"});
        jQuery(this).css({"animation-duration": duration + "ms", "-webkit-animation-duration": duration + "ms"});
        jQuery(this).addClass('animated');
    }, {offset: '80%'});	
							
					
});	//ready

$( window ).resize(function() {
	//setHeight();
});
