;(function($){
	var a =0;
	var Timerr = setInterval(aa,40);
	function aa(){
		// for(var i=0;i<4;i++){
			/*随机生成初始位置*/
			var j1=parseInt(Math.random()*300+300);
			var left=parseInt(Math.random()*1600+000);
			var top=parseInt(Math.random()*10+(-10));
			$('.div').prepend('<div class="dd"></div>');
			$('.div').children('div').eq(0).css({'left':left,'top':top});
			$('.div').children('div').eq(0).animate({'left':left-j1,'top':$(window).height()+20},3000);
		// }
	}
	$(document).on('touchstart', '.dd', function(){
		$(this).css("background-position","0 -100px");
		a++;
		if(a == 5){
			$(".chuai_box").show();
			clearInterval(Timerr);
			/*红包雨停止时切换背景图*/
			setTimeout(function(){
				$(".div").addClass("bg_2");
			},2000);
		}
	});
})(jQuery);