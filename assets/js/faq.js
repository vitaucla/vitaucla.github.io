jQuery(document).ready(function ($) {
	//update these values if you change these breakpoints in the style.css file (or _layout.scss if you use SASS)
	var MqM = 768,
		MqL = 1024;

	var v_faqsSections = $('.cd-faq-group.v_faq'),
		c_faqsSections = $('.cd-faq-group.c_faq'),
		v_faqTrigger = $('.cd-faq-trigger.v_faq'),
		c_faqTrigger = $('.cd-faq-trigger.c_faq'),
		v_faqsContainer = $('.cd-faq-items.v_faq'),
		c_faqsContainer = $('.cd-faq-items.c_faq'),
		v_faqsCategoriesContainer = $('.cd-faq-categories.v_faq'),
		c_faqsCategoriesContainer = $('.cd-faq-categories.c_faq'),
		v_faqsCategories = v_faqsCategoriesContainer.find('a'),
		c_faqsCategories = c_faqsCategoriesContainer.find('a'),
		v_closeFaqsContainer = $('.cd-close-panel.v_faq'),
		c_closeFaqsContainer = $('.cd-close-panel.c_faq');

	//select v_faq section 
	v_faqsCategories.on('click', function (event) {
		event.preventDefault();
		var selectedHref = $(this).attr('href'),
			target = $(selectedHref);
		if ($(window).width() < MqM) {
			v_faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
			v_closeFaqsContainer.addClass('move-left');
			$('body').addClass('cd-overlay');
		} else {
			$('body,html').animate({ 'scrollTop': target.offset().top - 19 }, 200);
		}
	});

	//select c_faq section 
	c_faqsCategories.on('click', function (event) {
		event.preventDefault();
		var selectedHref = $(this).attr('href'),
			target = $(selectedHref);
		if ($(window).width() < MqM) {
			c_faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
			c_closeFaqsContainer.addClass('move-left');
			$('body').addClass('cd-overlay');
		} else {
			$('body,html').animate({ 'scrollTop': target.offset().top - 19 }, 200);
		}
	});

	//close faq lateral panel - mobile only
	$('body').bind('click touchstart', function (event) {
		if ($(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) {
			closePanel(event);
		}
	});
	v_faqsContainer.on('swiperight', function (event) {
		closePanel(event);
	});
	c_faqsContainer.on('swiperight', function (event) {
		closePanel(event);
	});

	//show faq content clicking on faqTrigger
	v_faqTrigger.on('click', function (event) {
		event.preventDefault();
		$(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
	});
	c_faqTrigger.on('click', function (event) {
		event.preventDefault();
		$(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
	});

	//update category sidebar while scrolling
	$(window).on('scroll', function () {
		if ($(window).width() > MqL) {
			(!window.requestAnimationFrame) ? updateCategory() : window.requestAnimationFrame(updateCategory);
		}
	});

	$(window).on('resize', function () {
		if ($(window).width() <= MqL) {
			v_faqsCategoriesContainer.removeClass('is-fixed').css({
				'-moz-transform': 'translateY(0)',
				'-webkit-transform': 'translateY(0)',
				'-ms-transform': 'translateY(0)',
				'-o-transform': 'translateY(0)',
				'transform': 'translateY(0)',
			});
			c_faqsCategoriesContainer.removeClass('is-fixed').css({
				'-moz-transform': 'translateY(0)',
				'-webkit-transform': 'translateY(0)',
				'-ms-transform': 'translateY(0)',
				'-o-transform': 'translateY(0)',
				'transform': 'translateY(0)',
			});
		}
		if (v_faqsCategoriesContainer.hasClass('is-fixed')) {
			v_faqsCategoriesContainer.css({
				'left': v_faqsContainer.offset().left,
			});
		}
		if (c_faqsCategoriesContainer.hasClass('is-fixed')) {
			c_faqsCategoriesContainer.css({
				'left': c_faqsContainer.offset().left,
			});
		}
	});

	function closePanel(e) {
		e.preventDefault();
		v_faqsContainer.removeClass('slide-in').find('li').show();
		v_closeFaqsContainer.removeClass('move-left');
		c_faqsContainer.removeClass('slide-in').find('li').show();
		c_closeFaqsContainer.removeClass('move-left');
		$('body').removeClass('cd-overlay');
	}

	function updateCategory() {
		updateCategoryPosition();
		updateSelectedCategory();
	}

	function updateCategoryPosition() {
		var v_top = $('.cd-faq.v_faq').offset().top,
			c_top = $('.cd-faq.c_faq').offset().top,
			v_height = jQuery('.cd-faq.v_faq').height() - jQuery('.cd-faq-categories.v_faq').height(),
			c_height = jQuery('.cd-faq.c_faq').height() - jQuery('.cd-faq-categories.c_faq').height(),
			margin = 100;
		if (v_top - margin <= $(window).scrollTop() && v_top - margin + v_height > $(window).scrollTop()) {
			var leftValue = v_faqsCategoriesContainer.offset().left,
				widthValue = v_faqsCategoriesContainer.width();
			v_faqsCategoriesContainer.addClass('is-fixed').css({
				'left': leftValue,
				'top': margin,
				'-moz-transform': 'translateZ(0)',
				'-webkit-transform': 'translateZ(0)',
				'-ms-transform': 'translateZ(0)',
				'-o-transform': 'translateZ(0)',
				'transform': 'translateZ(0)',
			});
		} else if (v_top - margin + v_height <= $(window).scrollTop()) {
			var delta = v_top - margin + v_height - $(window).scrollTop();
			v_faqsCategoriesContainer.css({
				'-moz-transform': 'translateZ(0) translateY(' + delta + 'px)',
				'-webkit-transform': 'translateZ(0) translateY(' + delta + 'px)',
				'-ms-transform': 'translateZ(0) translateY(' + delta + 'px)',
				'-o-transform': 'translateZ(0) translateY(' + delta + 'px)',
				'transform': 'translateZ(0) translateY(' + delta + 'px)',
			});
		} else {
			v_faqsCategoriesContainer.removeClass('is-fixed').css({
				'left': 0,
				'top': 0,
			});
		}
		if (c_top - margin <= $(window).scrollTop() && c_top - margin + c_height > $(window).scrollTop()) {
			var leftValue = c_faqsCategoriesContainer.offset().left,
				widthValue = c_faqsCategoriesContainer.width();
			c_faqsCategoriesContainer.addClass('is-fixed').css({
				'left': leftValue,
				'top': margin,
				'-moz-transform': 'translateZ(0)',
				'-webkit-transform': 'translateZ(0)',
				'-ms-transform': 'translateZ(0)',
				'-o-transform': 'translateZ(0)',
				'transform': 'translateZ(0)',
			});
		} else if (c_top - margin + c_height <= $(window).scrollTop()) {
			var delta = c_top - margin + c_height - $(window).scrollTop();
			c_faqsCategoriesContainer.css({
				'-moz-transform': 'translateZ(0) translateY(' + delta + 'px)',
				'-webkit-transform': 'translateZ(0) translateY(' + delta + 'px)',
				'-ms-transform': 'translateZ(0) translateY(' + delta + 'px)',
				'-o-transform': 'translateZ(0) translateY(' + delta + 'px)',
				'transform': 'translateZ(0) translateY(' + delta + 'px)',
			});
		} else {
			c_faqsCategoriesContainer.removeClass('is-fixed').css({
				'left': 0,
				'top': 0,
			});
		}
	}

	function updateSelectedCategory() {
		v_faqsSections.each(function () {
			var actual = $(this),
				margin = parseInt($('.cd-faq-title.v_faq').eq(1).css('marginTop').replace('px', '')),
				activeCategory = $('.cd-faq-categories.v_faq a[href="#' + actual.attr('id') + '"]'),
				topSection = (activeCategory.parent('li').is(':first-child')) ? 0 : Math.round(actual.offset().top);

			if ((topSection - 20 <= $(window).scrollTop()) && (Math.round(actual.offset().top) + actual.height() + margin - 20 > $(window).scrollTop())) {
				activeCategory.addClass('selected');
			} else {
				activeCategory.removeClass('selected');
			}
		});
		c_faqsSections.each(function () {
			var actual = $(this),
				margin = parseInt($('.cd-faq-title.c_faq').eq(1).css('marginTop').replace('px', '')),
				activeCategory = $('.cd-faq-categories.c_faq a[href="#' + actual.attr('id') + '"]'),
				topSection = (activeCategory.parent('li').is(':first-child')) ? 0 : Math.round(actual.offset().top);

			if ((topSection - 20 <= $(window).scrollTop()) && (Math.round(actual.offset().top) + actual.height() + margin - 20 > $(window).scrollTop())) {
				activeCategory.addClass('selected');
			} else {
				activeCategory.removeClass('selected');
			}
		});
	}
});