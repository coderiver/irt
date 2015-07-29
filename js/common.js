head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	//nav
	$('.js-menu-btn').on('click', function() {
		$(this).parents('.js-menu-block').find('.js-menu').toggleClass('is-active');
		$(this).toggleClass('is-active');
		$(this).parents('.js-menu-block').toggleClass('is-active');
		return false;
	});
	$('.js-menu').each(function() {
		$('body').on('click', function() {
			$('.js-menu').removeClass('is-active');
			$('.js-menu-block').removeClass('is-active');
			$('.js-menu-btn').removeClass('is-active');
		});
		$(this).on('click', function(event) {
			event.stopPropagation();	
		});
	});
	//more
	$('.js-more-btn').on('click', function() {
		$('.js-more').addClass('is-active');
		$(this).addClass('is-active');
		$('html, body').stop().animate({
			'scrollTop': $('.items').offset().top}, 500);
		

		return false;
	});
	//validate
	var form_validate = $('.js-validate');

		if (form_validate.length) {

		form_validate.each(function () {

			var form_this = $(this);
			$.validate({
				form : form_this,
				validateOnBlur : false,
				borderColorOnError : false,
				scrollToTopOnError : false,

				onSuccess : function() {
					form_this.addClass('is-success');
					// ajaxSubmit(form_this);
					return false;
				},

				onError : function () {
					form_this.addClass('is-error');
				},
			});

		});

	};
	//sliders
	$('.js-slider').slick({
		fade: true,
		dots: true,
		arrows: false
	});
	$('.js-int-slider').slick({
		fade: true,
		dots: true,
		arrows: true
	});
	$('.js-manage-slider').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1500
	});
	$('.js-manage-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.js-manage-nav')
			.removeClass('is-active')
			.filter('[data-index="' + nextSlide + '"]')
			.addClass('is-active');
	});
	$('.js-manage-nav').on('click', function(){
		var index = $(this).data('index');
		$('.js-manage-slider').slick('goTo', index);
		return false;
	});
	$('.js-cms-slider').slick({
		fade: true,
		dots: false,
		arrows: true
	});
	$('.js-cms-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.js-cms-nav')
			.removeClass('is-active')
			.filter('[data-index="' + nextSlide + '"]')
			.addClass('is-active');
	});
	$('.js-cms-nav').on('click', function(){
		// if ($(this).hasClass('is-active')) {
		// 	$('.js-cms-nav').removeClass('is-active');
		// }
		// else {
		// 	$('.js-cms-nav').removeClass('is-active');
		// 	$(this).addClass('is-active');
		// }
		var index = $(this).data('index');
		$('.js-cms-slider').slick('goTo', index);
		return false;
	});
	$('.js-cms-prev-slider').slick({
		fade: true,
		dots: false,
		arrows: false
	});
	$('.js-cms-prev-nav').on('click', function(){
		if ($(this).hasClass('is-active')) {
			$('.js-cms-prev-nav').removeClass('is-active');
		}
		else {
			$('.js-cms-prev-nav').removeClass('is-active');
			$(this).addClass('is-active');
		}
		var index = $(this).data('index');
		$('.js-cms-prev-slider').slick('goTo', index);
		return false;
	});

	//table nav
	//smoothscroll
	if ($('.js-t-nav').length > 0) {
		function scrollFixedElements() {
			var scroll_left = $(this).scrollLeft();
			$(".js-t-nav").css({
				left: -scroll_left
			});
		}
		scrollFixedElements();
		$(window).scroll(function(){
			scrollFixedElements()
		});
		$(window).scroll(function() {
			var parent = $('.t-nav').offset().top,
				scrollTop = $(window).scrollTop();
			if (scrollTop > parent) {
				$('.js-t-nav').addClass('is-active');
			}
			else {
				$('.js-t-nav').removeClass('is-active');
			};
		});
		$(window).load(function() {
			var parent = $('.t-nav').offset().top,
				scrollTop = $(window).scrollTop();
			if (scrollTop > parent) {
				$('.js-t-nav').addClass('is-active');
			}
			else {
				$('.js-t-nav').removeClass('is-active');
			};
		});
	};
	
	// scrollTop
	 $(".js-t-nav-link").click(function (){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top - 61
		}, 600);
		return false;
	});
	function scrollHeader() {
		if ($('.js-block').length) {
		  $('.js-block').each(function() {
			var navHeight = $('.header__bottom').outerHeight();
			if ($(window).scrollTop() >= $(this).offset().top-61) {
			  var id = $(this).attr("id");
			  $(".js-t-nav-link").removeClass("is-active");
			  $("[href='#"+id+"']").addClass("is-active");
			}	       
		  });
		}
	  }
	scrollHeader();
	$(window).scroll(function() {
		scrollHeader();
	});
	//scroll to
	$(".js-scroll-link").click(function (){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 600);
		return false;
	});
	//scroll benefits
	$(window).scroll(function() {
		if ($('.js-imgs').length) {
			if ($(window).scrollTop() >= $('.js-imgs').offset().top) {
				$('.js-imgs').addClass('is-active');
			}
			else {
				$('.js-imgs').removeClass('is-active');
			}
		};		
	});
	$(window).load(function() {
		if ($('.js-imgs').length) {
			if ($(window).scrollTop() >= $('.js-imgs').offset().top) {
				$('.js-imgs').addClass('is-active');
			}
			else {
				$('.js-imgs').removeClass('is-active');
			}
		};		
	});
 //    function imgMask(value) {
	// 	$('.js-img').css({
	// 		animate({width: 0, width: 50%, width: 100%}, 5s)
	// 	});
	// }
	// $('js-imgs').mousewheel(function(e, delta){
	// 	var widthImg = $('.js-img').width();
 //        if(e.originalEvent.wheelDelta > 0) {
            
 //        } else {
            
 //        }
 //    });

	//range
	$('.js-range').slider({
		range: "min",
		value: 1,
		step: 1,
		min: 0,
		max: 100,
		slide: function( event, ui ) {
			$(this).parents('.js-range-parent').find('.js-range-text').text( ui.value );
		}
	});

	function updatePicturePos(value) {
		$('.analytics__inner > img').css({
			// transform: 'translate3d('+ -value + '0, 0)'
			left: -value
		});
	}

	$( ".js-analytics" ).slider({
	        animate: true, 
	        range: "min", 
	        value: 1, 
	        min: 0, 
	        max: 2680, 
	    	step: 1,
	    	slide: function(e, ui) {
	    		updatePicturePos(ui.value);
	    	}
	});

	//select
	$(document).click(function() {
		$(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
	});

	// select list
	$("body").on("click",".js-select",function(event) {
		event.stopPropagation();
	});
	$("body").on("click",".js-select-text",function(event) {
		var select = $(this).parents(".js-select");
		if (select.hasClass("is-active")) {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
		}
		else {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
			select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
		}

	});

	$("body").on("click",".js-select-list li",function() {
		var val = $(this).attr("data-val");
		var text = $(this).text();
		var select = $(this).parents(".js-select");
		var selectList = $(this).parents(".js-select-list");
		select.find(".js-select-text").text(text);
		select.find("option").removeAttr("selected");
		select.find('option[value="'+val+'"]').attr("selected", "selected");
		selectList.find("li").removeClass("is-active");
		$(this).addClass("is-active");
		select.removeClass("is-active");
		selectList.slideUp(100);
		return false;

	});

	// parts
	$('body').click(function(event){
		$(".parts__item").removeClass('is-active');
	});

	$(".parts__item").click(function(event){		
		if ($(this).hasClass('is-active')) {
			$('.parts__item').removeClass('is-active');
		}
		else {
			$('.parts__item').removeClass('is-active');
			$(this).addClass('is-active');
		}
		
		event.preventDefault();
		return false;
	});

	$(function(){ // document ready
	   if (!!$('.js-sticky').length) { // make sure ".js-sticky" element exists
	      var el = $('.js-sticky');
	      var stickyTop = $('.js-sticky').offset().top; // returns number
	      var footerTop = $('.js-sticky-end').offset().top; // returns number
	      var stickyHeight = $('.js-sticky').height();
	      var limit = footerTop - stickyHeight;
	      $(window).scroll(function(){ // scroll event
	          var windowTop = $(window).scrollTop(); // returns number
	            
	          if (stickyTop < windowTop){
	             el.css({ position: 'fixed', top: 0 });
	             el.addClass('is-active');
	          }
	          else {
	             el.css('position','relative');
	             el.removeClass('is-active');
	          }
	            
	          if (limit < windowTop) {
	          var diff = limit - windowTop;
	          el.css({top: diff});
	          }     
	        });
	   }
	});


	var sceneSensor = new ScrollMagic.Scene({triggerElement: ".js-sensor", offset: 50, duration: 1180})

	function scrollSensor() {
		var caption = $('.js-sensor-caption');
		var textBlock = $('.js-textblock');
		var activeClass = 'is-active';

		var scrollController = new ScrollMagic.Controller({container: 'body'});

		textBlock.each(function(index, el) {
			new ScrollMagic.Scene({
				triggerElement: el,
				duration: $(el).outerHeight()
				// triggerHook: 'onEnter' // 'onLeave' , 'onCenter'
			})
			.on('start', function(e) {
				if (e.scrollDirection == 'FORWARD') {
					$(caption[index]).addClass(activeClass);
					$(textBlock[index]).addClass(activeClass);
				}
				if (e.scrollDirection == 'REVERSE') {
					$(caption[index]).removeClass(activeClass);
					$(textBlock[index]).removeClass(activeClass);
				}
			})
			.on('end', function(e) {
				if (e.scrollDirection == 'FORWARD') {
					$(caption[index]).removeClass(activeClass);
					$(textBlock[index]).removeClass(activeClass);
				}
				if (e.scrollDirection == 'REVERSE') {
					$(caption[index]).addClass(activeClass);
					$(textBlock[index]).addClass(activeClass);

				}
			})
			.addTo(scrollController);
		});
	}

	scrollSensor();

});