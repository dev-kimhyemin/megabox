/* Banner Image Slide */
var mySwiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: {
                delay: 3000,
            },
        });
        
/* Movie Chart Image */ 
var mySwiper = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    spaceBetween: 24,
	/*mousewheel: {
	   invert: true,
	},*/
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        600: {
            slidesPerView: 1.4,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});

/* Movie Chart Tab Menu */
var movieBtn = $(".movie_title > ul > li");
var movieCont = $(".movie_chart > div");

movieCont.hide().eq(0).show();

movieBtn.click(function(e){
	e.preventDefault();
	var target = $(this);
	var index = target.index();
	// alert(index);
	movieBtn.removeClass("active");
	target.addClass("active");
	movieCont.css("display", "none");
	movieCont.eq(index).css("display", "block");
});

/* Event */
var eventBtn = $(".event .menu_link .menu_link_cell a");
eventBtn.click(function(e){
	e.preventDefault();
});

/* Special Theater */
var specialBtn = $(".special_theater .special_cell a");
specialBtn.click(function(e){
	e.preventDefault();
});

/* Youtube */
var playBtn = $(".new .new_left .play");
playBtn.click(function(e){
	e.preventDefault();
});

var newBtn = $(".new .new_right .btn");
newBtn.click(function(e){
	e.preventDefault();
});

/* Notice Tab Menu */
var noticeTab = $(".notice");
noticeTab.find("ul > li > ul").hide();
noticeTab.find("li.active > ul").show();

function tabList(e){
	e.preventDefault();
	var target = $(this);
	target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
}

noticeTab.find("ul > li > a").click(tabList).focus();
