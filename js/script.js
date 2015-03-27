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

    //ブラウザ判定
	var userAgent = window.navigator.userAgent.toLowerCase();
    var appVersion = window.navigator.appVersion.toLowerCase();

	//Windowsの場合の背景ストレッチ
	if (userAgent.indexOf('msie') != -1) {
	    $(".headline").css( "background-size", "contain" );
	}
	
	//セレクト装飾
    $(document).ready(function(){
		$('.myselect').customSelect();
	});

});

