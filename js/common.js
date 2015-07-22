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
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
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
			parent = $('.t-nav').offset().top;
			scrollTop = $(window).scrollTop();
			if (scrollTop > parent) {
				$('.js-t-nav').addClass('is-active');
			}
			else {
				$('.js-t-nav').removeClass('is-active');
			};
		});
		$(window).load(function() {
			parent = $('.t-nav').offset().top;
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
	    		console.log(ui.value);
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

	// (function() {
	// 	new Slideshow( document.getElementById( 'slideshow-2' ) );
	// })();

});