
//スティッキーヘッダー
$(function () {
	const $win = $(window),
		$fv = $('.fv'),
		$header = $('.header'),
		fvH = $fv.outerHeight() - 1,
		fixedClass = 'fixed';
	$win.on('load scroll', () => {
		const value = $(this).scrollTop();
		if ($win.width() > 768 && value > fvH) {
			$header.addClass(fixedClass);
		} else {
			$header.removeClass(fixedClass);
		}
	})
});

//バーガーメニュー
$('.burger-btn').on('click', function () {
	// jQuery | header-navをdisplay: none;にトグルする
	$('.header-nav').fadeToggle(300);
	// jQueryでアロー関数の場合、thisはだいたいはwindow オブジェクトを指す
	$(this).toggleClass('cross');
	$('body').toggleClass('no-scroll');
});

if ($(window).width() <= 768) {
	$('.nav-list a').on('click', function () {
		$('.burger-btn').removeClass('cross');
		$('.header-nav').fadeOut(300);
		$('body').removeClass('no-scroll');
	})
};

//スライダー
$('.slider').slick({
	autoplay: true,
	autoplaySpeed: 2000,
	fade: true,
	speed: 1000,
	cssEase: 'linear'
});

