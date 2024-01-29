// JS fragment import example
import * as functions from "./modules/functions.js";
functions.isWebp();
/* Добавление loaded для HTML после полной загрузки страницы */
functions.addLoadedClass();

// import Bound from './libs/bounds.js'

// const boundary = Bound({
// 	margins: {bottom: 100}
// })

// const image = document.querySelectorAll('img[data-src]')

// const whenImageEnters = (image) => {
// 	return () => {
// 		image.src = image.dataset.src
// 	}
// }

// image.forEach(img => {
// 	boundary.watch(img, whenImageEnters(img))
// })

// Динамический адаптив
// Документация: https://github.com/FreelancerLifeStyle/dynamic_adapt#readme
//import './libs/dynamicAdapt.js';


let isDesk = $('body').hasClass('desktop'),
	menuOpen = false;

let scrollTop = $(window).scrollTop(),
	lastScrollTop = scrollTop;

var mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
var tablet = window.matchMedia('(min-width: 769px) and (max-width: 1023px)');
var desktop = window.matchMedia('(min-width: 1023px) and (max-width: 1279px)'); // Enable (for mobile)
var desktop_pc = window.matchMedia('(min-width: 1280px)');

if($('header').hasClass('autoHide')) {
	if (mobile.matches && scrollTop > 200) {
		$("header").addClass("header--scrolled");
	} else if (scrollTop > 800) {
		$("header").addClass("header--scrolled");
	}
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

window.addEventListener('scroll', throttle(DocumentScroll, 100));
 
function DocumentScroll() {
	scrollTop = $(window).scrollTop();

	if($('header').hasClass('autoHide')) {
		if (scrollTop < lastScrollTop || scrollTop < 200) {
			// scroll UP
			$('header').removeClass("header--hide");
		} else if(scrollTop > 200) {
			// scroll DOWN
			$('header').addClass("header--hide");
		}
	}

	if (mobile.matches) {
		(scrollTop > 200) ? $('header').addClass("header--scrolled") : $('header').removeClass("header--scrolled");
	} else {
		(scrollTop > 800) ? $('header').addClass("header--scrolled") : $('header').removeClass("header--scrolled");
	}

	lastScrollTop = scrollTop;
}

$(document).ready(function () {
	const urlParams = window.location.search.replace('?','').split('&').reduce(
		function(p,e){
			var a = e.split('=');
			p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
			return p;
		}, {}
	);

	if(urlParams['thank-you']) {
		const url = new URL(document.location);
		const searchParams = url.searchParams;
		searchParams.delete("thank-you");
		window.history.pushState({}, '', url.toString());
	}

	$('.header__burger').on('click', function() {
		if(!$('body').hasClass('menu-open')) {
			$('body').addClass('menu-open');
		} else {
			$('body').removeClass('menu-open');
		}
	});

	$('.header__menu-liscrollTop a').on('click', function() {
		$('.header__burger').removeClass('active');
		$('body').removeClass('menu-open');
	});

	document.addEventListener( 'wpcf7mailsent', function( event ) {
		event.preventDefault();
		const formID = event.detail.contactFormId;
		const $popupThanks = $('.popup--thanks');

		if ($popupThanks) {
			$('.popup').hide();
			$('body').addClass('scroll-disable');
			$popupThanks.parent().addClass('show').hide().fadeIn(200);
			$popupThanks.hide().fadeIn(200);
		}

		if ($('input[value="'+formID+'"]')) {
			const formName = $('input[value="'+formID+'"]').val();
      	window.history.pushState('1', 'Thank-you', '?thank-you=' + formName);
		} else {
      	window.history.pushState('1', 'Thank-you', '?thank-you=' + formID);
		}
	}, false );
});