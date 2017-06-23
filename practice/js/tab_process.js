function getId(id) {
	return typeof id === 'string' ? document.getElementById(id) : id;
}
window.onload = function () {
	var titLis = getId('notice-title').getElementsByTagName('li');
	var mods = getId('notice-content').getElementsByTagName('div');
	console.log(mods.length + titLis.length);
	//确保titles的个数与content个数相等
	if (titLis.length != mods.length) return;
	for(var i = 0;i < titLis.length; i ++) {
		console.log(titLis[i]);
		//给每个li加上索引属性id，方便后面的content里面的div调用
// 		titLis[i].id = i;  这里还是不要这么写，因为你会发现如果把id换成其他名字的，比如index属性，在控制台是不会显示出你加上的index属性的
		//用setAttribute()和getAtrribute()这一组方法
		titLis[i].setAttribute('index',i);
		//鼠标滑过时给每一个li元素加上select高亮显示
		titLis[i].onmouseover = function() {
			for(var j = 0;j < titLis.length;j ++) {
				titLis[j].className = '';//添加高亮之前去除之前的高亮样式，不然就会点一个高亮增加一个，而不是只选中一个
				mods[j].style.display = 'none'; //全部隐藏，方便后边mods显示内容
			}
			this.className = 'select';
			mods[this.getAttribute('index')].style.display = 'block';
		}
	}
}
