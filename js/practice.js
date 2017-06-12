window.onload = function() {
	console.log("开始执行")
	// 轮播
	var imgs = document.getElementsByTagName('img');
	var len = imgs.length;
	var pos = 0;
	setInterval(function(){
			console.log("pos:", pos);
			imgs[pos].style.display = 'none';
			++ pos;
			pos = (pos == len ? 0 : pos);
			imgs[pos].style.display = 'block';
	},5000);  //这里把定时器的时间改成与动画的时间一样，这样就不会因为动画还没有完成，就开始执行下一个图片了。


	//模态框
	var btn = document.getElementsByClassName("btn")[0];
	var mask = document.getElementsByClassName("mask")[0];
	var here = document.getElementsByClassName("here")[0];
	btn.addEventListener('click',function(){
		mask.style.visibility = (mask.style.visibility == "visible"  ) ? 'hidden' : 'visible';
	},false);

	here.addEventListener('click',function(){
		mask.style.visibility = (mask.style.visibility == "visible"  ) ? 'hidden' : 'visible';
	},false);
};