"user strict";

// Preloader
$(window).on("load", function () {
	$(".preloader").fadeOut(1000);
});

// Menu Click Event
let trigger = $(".header-trigger");
let dropdown = $(".menu-sidebar");
if (trigger || dropdown) {
	trigger.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown.toggleClass("active");
			trigger.toggleClass("active");
			// $('.overlay').toggleClass("active-color");
		});
	});
	dropdown.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		if (parseInt(screenSize) < parseInt(991)) {
			dropdown.removeClass("active");
			trigger.removeClass("active");
			// $('.overlay').removeClass("active-color");
		}
	});
}

// Menu Click Event
let trigger2 = $(".search-trigger");
let dropdown2 = $(".search-form");
if (trigger2 || dropdown2) {
	trigger2.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown2.toggleClass("active");
			// $('.overlay').toggleClass("active-color");
		});
	});
	dropdown2.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		if (parseInt(screenSize) < parseInt(991)) {
			dropdown2.removeClass("active");
			// $('.overlay').removeClass("active-color");
		}
	});
}

$(".menu-close").on("click", function () {
	$(".menu").slideUp();
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
	screenSize = window.innerWidth;
});

$(".menu li a").on("click", function (e) {
	if (parseInt(screenSize) < parseInt(991)) {
		$(this).siblings(".sub-menu").slideToggle();
	}
});

// Sticky Menu
var header = document.querySelector(".header");
if (header) {
	window.addEventListener("scroll", function () {
		header.classList.toggle("sticky", window.scrollY > 0);
	});
}

// Scroll To Top
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
	if ($(this).scrollTop() < 500) {
		scrollTop.removeClass("active");
	} else {
		scrollTop.addClass("active");
	}
});

//Click event to scroll to top
$(".scrollToTop").on("click", function () {
	$("html, body").animate(
		{
			scrollTop: 0,
		},
		300
	);
	return false;
});

$(".brand-slider").slick({
	fade: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	pauseOnHover: true,
	centerMode: false,
	dots: false,
	arrows: false,
	nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
	prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 5,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});

// Odometer Counter
let counter = $(".counter-item");
if (counter) {
	counter.each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
}

// Shop Cart
$(".minus-plus").on("click", function () {
	var oldValue = $(this).siblings("input").val();
	if ($(this).hasClass("cart-plus")) {
		var newVal = parseFloat(oldValue) + 01;
	} else {
		if (oldValue > 1) {
			var newVal = parseFloat(oldValue) - 01;
		} else {
			newVal = 01;
		}
	}
	$(this).siblings("input").val(newVal);
});

//Faq
$(".faq-header").on("click", function (e) {
	var element = $(this).parent(".faq-item");
	if (element.hasClass("open")) {
		element.removeClass("open");
		element.find(".faq-item__content").removeClass("open");
		element.find(".faq-item__content").slideUp(300, "swing");
	} else {
		element.addClass("open");
		element.children(".faq-item__content").slideDown(300, "swing");
		element.siblings(".faq-item").children(".faq-item__content").slideUp(300, "swing");
		element.siblings(".faq-item").removeClass("open");
		element.siblings(".faq-item").find(".faq-item__content").slideUp(300, "swing");
	}
});

$(".video-button").magnificPopup({
	type: "iframe",
	// other options
});

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".menu li a").each(function () {
	if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
		$(this).addClass("active");
	}
});

// Gallery Modal
$(".gallery-item").on("click", function (e) {
	$(".gallery-modal").show(300);
	$(".overlay").addClass("active-color");
});
$(".overlay, .modal-close").on("click", function (e) {
	$(".overlay").removeClass("active-color");
	$(".gallery-modal").hide(300);
	$(".share-modal").hide(300);
	$(".success-modal").hide(300);
});
// Gallery Modal

// Share Modal
$(".share-btn").on("click", function (e) {
	$(".gallery-modal").hide();
	e.stopPropagation();
	$(".share-modal").show();
	$(".overlay").addClass("active-color");
});
// Share Modal

// Download Success
$(".download-btn").on("click", function (e) {
	$(".gallery-modal").hide();
	e.stopPropagation();
	$(".success-modal").show();
	$(".overlay").addClass("active-color");
});
// Download Success
