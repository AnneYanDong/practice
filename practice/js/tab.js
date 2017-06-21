(function($){
	$(function(){
		$("#tabs").tabs({
	                    //设置各选项卡在切换时的动画效果
	                    fx: { opacity: "toggle", height: "toggle" ,fontSize: "2rem"},
	                    event: "mousemove" //通过移动鼠标事件切换选项卡
	                });
	});
})(jQuery);