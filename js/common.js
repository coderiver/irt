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
});