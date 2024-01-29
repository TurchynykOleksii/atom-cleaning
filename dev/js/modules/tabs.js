$('.tabs-switch li').on('click', function () {
	const tabs = $(this).closest('.tabs-switch');
	const tabsContainer = tabs.closest('.tabs-wrap');

	if (!$(this).hasClass('active')) {
		const filter = $(this).data('filter');
		const $deff = ($(window).width() / 2) - ($(this).width() / 2) - 20;
		
		tabs.find('li').removeClass('active');
		$(this).addClass('active');

		tabsContainer.animate({ scrollLeft: $(this).offset().left + tabsContainer.scrollLeft() - $deff }, 200);
	}
});