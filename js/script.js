$(function(){

	//スムーススクロール
	$('a[href^=#]').click(function(){
	    var speed = 600;
	    var href= $(this).attr("href");
	    var target = $(href == "#" || href == "" ? 'html' : href);
	    var navh = $('.navbar_qsuke').height();
	    var position = target.offset().top;
	    $("html, body").animate({scrollTop:position-navh}, speed, "swing");
	    return false;
	  });

    //ファーストビューアニメーション
    $(".logoarea").hide();
    $(".catch01").hide();
    $(".catch02").hide();
    $(".catch03").hide();
    $(".catch04").hide();
    $(".area_badge").hide();
    $(".btn_g").hide();
    $(".btn_more").hide();

    setTimeout(function(){
    	$(".logoarea").show("fast");
    },100)

    setTimeout(function(){
    	$(".area_badge").show("fast");
    },1500)

    setTimeout(function(){
    	$(".catch01").show();
    	$(".catch01").shuffleLetters();
    },2000)

    setTimeout(function(){
    	$(".catch02").show();
    	$(".catch02").shuffleLetters();	
    },3000)

    setTimeout(function(){
    	$(".catch03").show("fast");
    	$(".catch04").show("fast");
    },3500)

    setTimeout(function(){
    	$(".btn_g").show("fast");
    },4000)

    setTimeout(function(){
    	$(".btn_more").show("fast");
    },4300)

    //スクロール値でアニメーション

    var w = $(window).width();
	if (w > 768) {
		sca();
	} 

	//セレクト装飾
 //    $(document).ready(function(){
	// 	$('.myselect').customSelect();
	// });

function sca() {
	$(".corner_left").hide();
	$(".corner_right").hide();
    $(".text_ex").hide();
    $(".eximg_wrap").hide();
    $(".corner_left").hide();
    $(".corner_right").hide();
    $(".f01").hide();
    $(".f02").hide();
    $(".f03").hide();
    $(".f04").hide();
    $(".f05").hide();
    $(".release").hide();
    $(".list_note").hide();
    $(".totop").hide();

    var w = $(window).width();
    $(window).scroll(function () {

		var s = $(this).scrollTop();
		console.log(s);
		var c2 = 350;
		var c3 = 1000;
		var c4 = 2300;

		if(s > c2) {
			$(".text_ex").fadeIn('fast');
			setTimeout(function(){
				$(".eximg_wrap").fadeIn('slow');
				$(".corner_left").fadeIn('slow');
				$(".corner_right").fadeIn('slow');
			},300)
		}

		if (s > c3) {
			$(".f01").fadeIn('slow');
			$(".f02").fadeIn('slow');
			setTimeout(function(){
				$(".f03").fadeIn('slow');
				$(".totop").fadeIn('slow');
			},500)
			setTimeout(function(){
				$(".f04").fadeIn('slow');
				$(".f05").fadeIn('slow');
			},1500)
			setTimeout(function(){
				$(".release").fadeIn('slow');
			},2000)

		}

		if (s > c4) {
			$(".list_note").show('fast');
		}
	});
}


});



