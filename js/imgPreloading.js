(function () {
	console.log("开始执行！");
	var imgs = [
		'../img/20170313_gd_lt.png',
		'../img/20170313_gd_znsw.png',
		'../img/20170313_pf_cx.png',
		'../img/20170313_pf_mk.png',
		'../img/20170313_xy_jy.png',
		'../img/20170313_zn_bj.png',
		'../img/20170313_pf_cx.png',
		'../img/20170313_pf_mk.png',
		'../img/20170313_xy_jy.png',
		'../img/20170313_zn_bj.png',
		'../img/20170313_pf_cx.png',
		'../img/20170313_pf_mk.png',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497285040481&di=4ee51d10db872fd27cc2f0b0285725d3&imgtype=0&src=http%3A%2F%2Fdullneon.com%2Frandomnotes%2Fimages-videos-and-other-content%2F2015%2F08%2Fdinosaur_dig_shoot.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497285040486&di=f308b13466ef627b0222670cac92da0b&imgtype=0&src=http%3A%2F%2Fwww.randomswill.com%2Fwp-content%2Fuploads%2F2012%2F06%2FGrenade1.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497285133200&di=a087fe5bbfee09195210dcd7c572f7f7&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2933587170%2C508134748%26fm%3D214%26gp%3D0.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497285040485&di=320f8e07254691820822d6c0df4ff780&imgtype=0&src=http%3A%2F%2Fwww.thelackymom.com%2Fwp-content%2Fuploads%2FIMG_1832-3.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497285040487&di=2e614e86ff10ef1f50eeaac7aec02269&imgtype=0&src=http%3A%2F%2Fwww.realbigenvelope.com%2Fbigenvelope%2Fwp-content%2Fuploads%2FABSTRACTLITEDEC09_0009.jpg'
		],
		len = imgs.length,
		index = 0,
		count = 0;

	$.each(imgs,function(i,src){
		var imgObj = new Image();  //生成img对象

		$(imgObj).on('load error',function(){
			/*第一种方法*/
			/*这里出现的问题是，setTimeout()方法的第一个参数不能传立即执行函数，不然就看不到效果，只能传入函数代码块*/
			// setTimeout(function(){	
			// 	console.log(count);
			// 	console.log('len->'+ len);
			// 	console.log(Math.round((count + 1)/len * 100) + '%');
			// 	$('.progress').html(Math.round((count + 1)/len * 100) + '%');
			// 	if (count >= len -1) {
			// 		$('.loading').hide();
			// 		$('.content').show();
			// 		document.title = '1/' + len;
			// 	}
			// 	count++;
			// },i * 1000);

			/*第二种方法*/
			/*这样写没问题，可是当你的图片资源全都是本地来的时候，
			加载页也会很快的飘过，根本看不见加载页的进度数据，
			当你加上网上的图片，图片大小很大之后，加载页的进度条是会显示出来的。*/
			$('.progress').html(Math.round((count + 1)/len * 100) + '%');
				if (count >= len -1) {
					$('.loading').hide();
					$('.content').show();
					document.title = '1/' + len;
				}
			count ++;
		});
		imgObj.src = src;
		
	})

	$('.btn').on('click',function(){
		console.log($(this));
		if ('prev' === $(this).data('control')) {  //上一张
			// -- index;
			// if (index < 0) {
			// 	index = 0;
			// }
			// 简化上述几行代码
			// -- index;
			index = Math.max(0,--index);
		}else { //下一张
			index = Math.min(len-1,++index);
		}
		document.title = (index + 1) + '/' + len;
		$('#img').attr('src',imgs[index]);
	})
})();