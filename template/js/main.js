//  All Javascripit Code
 
 (function ($) {
     "use strict";

     var $constrom_window = $(window);

     // :: Preloader Active Code
      $constrom_window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

     // :: One Page Nav Active Code
     if ($.fn.onePageNav) {
         $('#nav').onePageNav({
             currentClass: 'active',
             scrollSpeed: 1500,
             easing: 'easeOutQuad'
         });
     }

     // :: Scrollup Active Code

     if ($.fn.scrollUp) {
         $constrom_window.scrollUp({
             scrollSpeed: 1000,
             scrollText: '<i class="bi bi-arrow-90deg-up"></i>'
         });
     }

     // :: Welcome Slides Active Code

     var swiper = new Swiper(".banner__slider", {
         effect: "coverflow",
         slidesPerView: 2,
         grabCursor: true,
         speed: 1400,
         centeredSlides: true,
         coverflowEffect: {
             rotate: 0,
             stretch: 20,
             depth: 600,
             modifier: 3,
             slideShadows: false,
         },
         breakpoints: {
             320: {
                 slidesPerView: 1,
                  coverflowEffect: {
                     stretch: 50,
                     depth: 200,
                     modifier: 1,
                 },
             },
             768: {
                 slidesPerView: 3,
                  coverflowEffect: {
                     stretch: 50,
                     depth: 200,
                     modifier: 1,
                 },
             },
             992: {
                 slidesPerView: 3,
                 coverflowEffect: {
                     stretch: 50,
                     depth: 200,
                     modifier: 1,
                 },
             },
             1200: {
                 slidesPerView: 3,
                 coverflowEffect: {
                     stretch: 50,
                     depth: 200,
                     modifier: 1,
                 },
             },
             1400: {
                 slidesPerView: 3,
                 coverflowEffect: {
                     stretch: 100,
                     depth: 150,
                     modifier: .96,
                 },
             },
         },
         loop: true,
         autoplay: {
             delay: 1500,
         },
     });



     // :: Welcome Slides - 2 Active Code

      var swiper = new Swiper(".mySwiper2", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
           speed: 1500,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });


     // :: Client Slides - Active Code

       var swiper = new Swiper(".mySwiper3", {
        effect: "cards",
        loop: true,
        padding:30,
         autoplay: true,
        grabCursor: true,
      });

       var swiper = new Swiper(".mySwiper4", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });

     // :: Explore  Slides Active Code
 
     var swiper = new Swiper(".mySwiper", {
         effect: "coverflow",
          slidesPerView: 2,
          loop: true,
          autoplay: true,
         grabCursor: true,
         speed: 1500,
         centeredSlides: true,
         slidesPerView: "auto",
         coverflowEffect: {
             rotate: 50,
             stretch: 0,
             depth: 100,
             modifier: 1,
             slideShadows: true,
         },
         pagination: {
             el: ".swiper-pagination",
         },
     });


     // :: Top Seller Slides Active Code

     if ($.fn.owlCarousel) {
         var topsellerSlider = $('.top-seller');
         topsellerSlider.owlCarousel({
             items: 5,
             loop: true,
             autoplay: true,
             smartSpeed: 1500,
             margin: 30,
             dots: true,
             responsive: {
                 0: {
                     items: 1
                 },
                  480: {
                     items: 2
                 },
                 768: {
                     items: 3
                 },
                 992: {
                     items: 4
                 },
                 1200: {
                     items: 5
                 }
             }
         });
     }

     // :: Brand Slides Active Code

     if ($.fn.owlCarousel) {
         var parnetSlider = $('.partner-slider');
         parnetSlider.owlCarousel({
             items: 7,
             loop: true,
             autoplay: true,
             smartSpeed: 1500,
             margin: 30,
             dots: true,
             responsive: {
                 320: {
                     items:3
                 },
                 480: {
                     items: 4
                 },
                  576: {
                     items: 4
                 },
                 768: {
                     items: 5
                 },
                 992: {
                     items: 6
                 },
                 1200: {
                     items:6
                 }
             }
         });
     }

     // :: All Explore Slides Active Code

     if ($.fn.owlCarousel) {
         var topsellerSlider = $('.explore-slider');
         topsellerSlider.owlCarousel({
             items: 4,
             loop: true,
             autoplay: true,
             smartSpeed: 1500,
             margin: 30,
             nav: true,
             navText: ["<i class = 'bx bx-chevron-left' < /i>", "<i class='bx bx-chevron-right'</i>"],
             dots: false,
             responsive: {
                 0: {
                     items: 1
                 },
                 576: {
                     items: 2
                 },
                 768: {
                     items: 2
                 },
                 992: {
                     items: 3
                 },
                 1200: {
                     items: 4
                 }
             }
         });
     }

    // :: Blog Slider Active Code

    var swiper = new Swiper(".mySwiperblog", {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
     
   
    // ::  Sticky Header

     window.onscroll = function () {
         scrollFunction();
     };

     function scrollFunction() {
         if (
             document.body.scrollTop > 50 ||
             document.documentElement.scrollTop > 50
         ) {
             $(".site-header--sticky").addClass("scrolling");
         } else {
             $(".site-header--sticky").removeClass("scrolling");
         }
         if (
             document.body.scrollTop > 700 ||
             document.documentElement.scrollTop > 700
         ) {
             $(".site-header--sticky.scrolling").addClass("reveal-header");
         } else {
             $(".site-header--sticky.scrolling").removeClass("reveal-header");
         }
     }

    // :: Animation on Scroll initializing
        if($.fn.init){
    AOS.init();
        }

     // :: Wow js Active Code

     if ($constrom_window.width() > 767) {
         new WOW().init();
     }

 })(jQuery);