// Открыть попап окно по якорной ссылке
$(document).on("click", "a", function (e) {
	var popup_id = $(this).attr("href");

	if ($(popup_id).hasClass('popup')) {
		e.preventDefault();
		$('.popup').hide();
		$('body').addClass('scroll-disable');
		$(popup_id).parent().addClass('show').hide().fadeIn();
		$(popup_id).hide().fadeIn();
	}
});

$(document).ready(function () {
	var popup_id = window.location.hash;

	if ($(popup_id).hasClass('popup')) {
		$('.popup').hide();
		$('body').addClass('scroll-disable');
		$(popup_id).parent().addClass('show').hide().fadeIn();
		$(popup_id).hide().fadeIn();
	}
});

$(document).on("click", ".popup__bttn-close, .popup__close", function (e) {
	e.preventDefault();
	$('body').removeClass('scroll-disable');
	$('.popup-bg').fadeOut().removeClass('show');
});

$(document).mousedown(function (e) {
	if ($('.popup-bg').hasClass('show')) {
		var popup = $('.popup');

		if (!popup.is(e.target) && popup.has(e.target).length === 0) {
			$('body').removeClass('scroll-disable');
			$('.popup-bg').fadeOut().removeClass('show');

			$('.popup__video #video').each(function (index) {
				$(this).attr('src', $(this).attr('src'));
				return false;
			});

			// var $video = $('.popup__video #video'),
			// 	src = $video.attr('src');


			// $video.attr('src', src);
			// console.log(src);
		};
	}
});




