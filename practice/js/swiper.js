$(document).ready(function() {
	var mySwiper = new Swiper('.swiper-container',{
		// initialSlide: 1,  //指定开始滑动的第一个slide
		direction: 'horizontal',
    	loop: true,
    	autoplay: 2000,  //这个属性不可少，不然就不能自动滑动,但是默认都是可以滑动的
    	speed: 2000,  //这个属性控制slide的速度
  //   	autoplayDisableOnInteraction: true,  //这个属性是用户操作swiper的时候是否停止自动播放，默认是true
  //   	grabCursor: true,  //鼠标滑动到slide上面时变成手掌的形式，默认是false
    	// parallax: true,
    	// history: '',
    	// virtualTranslate: true,
  //   	fade: true,
  //   	effect: 'cube',
  //   	cube: {
		//   slideShadows: true,
		//   shadow: true,
		//   shadowOffset: 100,
		//   shadowScale: 0.6
		// }
		// effect : 'coverflow',
		// slidesPerView: 2,
		// centeredSlides: true,
		// coverflow: {
		//             rotate: 30,
		//             stretch: 10,
		//             depth: 60,
		//             modifier: 2,
		//             slideShadows : true
		//         }
		// effect : 'flip',
		// flip: {
  //           slideShadows : true,
  //           limitRotation : true,
  //       }
  		pagination: '.swiper-pagination',
  		paginationClickable: true,
  		// paginationType: 'fraction',  //默认是圆点
  		// paginationBulletRender: function (swiper, index, className) {
	   //    return '<span class="' + className + '">' + (index + 1) + '</span>';
	   //  }
	    prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		// scrollbar: '.swiper-container',
	});
});