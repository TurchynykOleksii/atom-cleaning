var $anchor = $('.anchor');
var anchorHeight = $anchor.height();
var anchorTop = $anchor.offset().top;
var headerHeight = $('.header').outerHeight();
var headerHide = $('.header').hasClass('header--hide');
var fixedTop = 0;

if(!headerHide) {
	fixedTop = anchorHeight + headerHeight;
} else {
	fixedTop = anchorHeight;
}

function throttle(fn, wait) {
	var time = Date.now();
	return function() {
	  if ((time + wait - Date.now()) < 0) {
		 fn();
		 time = Date.now();
	  }
	}
}
 
window.addEventListener('scroll', throttle(AnchorScroll, 10));
 
function AnchorScroll() {
	var scrollTop = $(window).scrollTop();
	headerHeight = $('.header').outerHeight();
	headerHide = $('.header').hasClass('header--hide');

	if(!headerHide) {
		fixedTop = anchorHeight + headerHeight;
	} else {
		fixedTop = anchorHeight;
	}

	if(scrollTop > anchorTop && headerHide) {
		$anchor.addClass('fixed').css('top', 0);
		$anchor.next('section').css('margin-top', $anchor.height());
	} else if (scrollTop > (anchorTop - headerHeight) && !headerHide) {
		$anchor.addClass('fixed').css('top', headerHeight);
		$anchor.next('section').css('margin-top', $anchor.height());
	} else if (scrollTop < (anchorTop - anchorHeight)) {
		$anchor.removeClass('fixed').removeAttr("style");
		$anchor.next('section').removeAttr("style");
	}

	$('section').each(function (i, el) {
		var top = $(el).offset().top - fixedTop - 100;
		var bottom = top + $(el).height();

		var id = $(el).attr('id');
		if (scrollTop > top && scrollTop < bottom) {
			$('.anchor__item a.active').removeClass('active');
			$('.anchor__item a[href="#' + id + '"]').addClass('active')
		};
	});
};

// Якорные ссылки
$anchor.on("click", "a", function (e) {
	e.preventDefault();
	let sectionId = $(this).attr('href');

	if (!$anchor.hasClass('animate') && !$(sectionId).length == 0) {
		$anchor.addClass('animate');
		let sectionTop = $(sectionId).offset().top;

		$('html').animate({ scrollTop: (sectionTop - fixedTop) }, 100).delay(600).queue(function (next) {
			$anchor.removeClass('animate');
			next();
		});
		anchorScroll($(this));
	}
});

const anchorScroll = function(link) {
	if(window.innerWidth < 1024) {
		const $deff = ($(window).width() / 2) - (link.width() / 2) - 12;
		$('.anchor__list').animate({ scrollLeft: link.offset().left + $('.anchor__list').scrollLeft() - $deff }, 200);
	}
}