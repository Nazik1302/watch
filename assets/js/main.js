/*
Author       : Theme-Family
Template Name: Baki - Product Landing page Template
Version      : 1.0
*/

(function($) {
    "use strict";
	
	
		/*PRELOADER JS*/
			 setTimeout(function () {
            $('.atf-status').fadeOut();
        }, 3000);
		/*END PRELOADER JS*/
		
		
		/* --------------------------------------------------------
           LightCase jQuery Active
        --------------------------------------------------------- */
        $('a[data-rel^=lightcase]').lightcase({
            transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
            swipe: true,
            maxWidth: 1170,
            maxHeight: 600,
        });
       

		  /*--------------------------------------------------------------
       Sticky Header
      --------------------------------------------------------------*/
	
		$(window).on("scroll", function() {
			 var scroll = $(window).scrollTop();
			if (scroll >= 10) {
				$('.atf-sticky-header').addClass('atf-sticky-active');
			} else {
				$('.atf-sticky-header').removeClass('atf-sticky-active');
			}
		});
     
    /*--------------------------------------------------------------
       Mobile Menu
      --------------------------------------------------------------*/

        $('.atf-nav').append('<span class="atf-menu-toggle"><span></span></span>');
        $('.menu-item-has-children').append('<span class="atf-menu-dropdown-toggle"></span>');
        $('.atf-menu-toggle').on('click', function() {
            $(this).toggleClass("atf-toggle-active").siblings('.atf-nav-list').slideToggle();;
        });
        $('.atf-menu-dropdown-toggle').on('click', function() {
            $(this).toggleClass('active').siblings('ul').slideToggle();
        });

    
    /*--------------------------------------------------------------
       One Page Navigation
      --------------------------------------------------------------*/
        // Click To Go Top
        $('.atf-smooth-move').on('click', function() {
            var thisAttr = $(this).attr('href');
            if ($(thisAttr).length) {
                var scrollPoint = $(thisAttr).offset().top - 50;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 800);
            }
            return false;
        });

        // One Page Active Class
        var topLimit = 300,
            ultimateOffset = 200;

        $('.atf-onepage-nav').each(function() {
            var $this = $(this),
                $parent = $this.parent(),
                current = null,
                $findLinks = $this.find("a");

            function getHeader(top) {
                var last = $findLinks.first();
                if (top < topLimit) {
                    return last;
                }
                for (var i = 0; i < $findLinks.length; i++) {
                    var $link = $findLinks.eq(i),
                        href = $link.attr("href");

                    if (href.charAt(0) === "#" && href.length > 1) {
                        var $anchor = $(href).first();
                        if ($anchor.length > 0) {
                            var offset = $anchor.offset();
                            if (top < offset.top - ultimateOffset) {
                                return last;
                            }
                            last = $link;
                        }
                    }
                }
                return last;
            }

            $(window).on("scroll", function() {
                var top = window.scrollY,
                    height = $this.outerHeight(),
                    max_bottom = $parent.offset().top + $parent.outerHeight(),
                    bottom = top + height + ultimateOffset;

                var $current = getHeader(top);

                if (current !== $current) {
                    $this.find(".active").removeClass("active");
                    $current.addClass("active");
                    current = $current;
                }
            });
        });

	/*--------------------------------------------------------------
       Sticky Back To Top
      --------------------------------------------------------------*/
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.atf-sticky-header').addClass('atf-nav');
				$('.atf-back-to-top').addClass('open');
			} else {
				$('.atf-sticky-header').removeClass('atf-nav');
				$('.atf-back-to-top').removeClass('open');
			}
		  });
	/*--------------------------------------------------------------
       START SCROLL UP
      --------------------------------------------------------------*/	  
			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
	
	/*--------------------------------------------------------------
         END SCROLL UP
      --------------------------------------------------------------*/

			/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:10,
				autoplay:true,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:3
					}
				}
			})
			/*END PARTNER LOGO*/
			
				
		
			/*START Testimonials LOGO*/
			$("#testimonial-slider").owlCarousel({
				margin:3,
				nav: true,
				autoplay:true,
				navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				loop:true,
				dots:false,
				responsive:{
					0:{
						items:1
					},
					768:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
		/*END Testimonials LOGO*/
		
			
		//  POPUP VIDEO
			$('.popup-video').magnificPopup({
				type: 'iframe',
			});

			// ------------------ Magnific Popup ----------------// 

			var magnifPopup = function() {
				$('.popup-img').magnificPopup({
					type: 'image',
					removalDelay: 300,
					mainClass: 'mfp-with-zoom',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: true, // By default it's false, so don't forget to enable it

						duration: 300, // duration of the effect, in milliseconds
						easing: 'ease-in-out', // CSS transition easing function

						// The "opener" function should return the element from which popup will be zoomed in
						// and to which popup will be scaled down
						// By defailt it looks for an image tag:
						opener: function(openerElement) {
							// openerElement is the element on which popup was initialized, in this case its <a> tag
							// you don't need to add "opener" option if this code matches your needs, it's defailt one.
							return openerElement.is('img') ? openerElement : openerElement.find('img');
						}
					}
				});
			};

			// Call the functions
			magnifPopup();
			
			// mailchamp
			$('#mc-form').ajaxChimp({
				url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
				/* Replace Your AjaxChimp Subscription Link */
			}); 
			
			//mouse hover tile effect js//

			$(".card-s").tilt({
			  maxTilt: -20,
			  perspective: 2400,
			  speed: 2200,
			  easing: "cubic-bezier(.03,.98,.52,.99)",
			  scale: 1,
			  
			  });

			  $('.fancybox').fancybox({
				helpers: {
				  overlay: {
					locked: false // отключаем блокировку overlay
				  }
			
				}
			  });

    
})(jQuery);

