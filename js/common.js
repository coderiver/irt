head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
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
});