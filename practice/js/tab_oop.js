;((function($){
	//定义构造函数Tab
	var Tab = function(tab){
		var _this = this;
		console.log(_this);
		//保存单个tab组件
		_this.tab = tab;
		console.log(_this.tab);
		//默认的配置参数
		_this.config = {
			//tab-nav的事件触发类型，是click还是mouseover还是其他
			"triggerType": "click",
			//切换tab的效果
			"effect": "default",
			//默认选中第几个tab
			"invoke": 1,
			//是否自动播放,当指定了时间间隔就表示自动切换，并且切换时间为指定的时间间隔
			"auto": false
		}
		//扩展配置参数
		if(_this.getConfig()) {
			console.log(_this.getConfig());
			$.extend(_this.config,_this.getConfig());
		}
		console.log(_this.config);

		//分别保存tab选项卡的切换键和内容区，绑定事件
		_this.tabItems = _this.tab.find("ul.tab-nav li");
		_this.tabContents = _this.tab.find(".tab-content .tab-content-item");

		var config = _this.config;
		if (config.triggerType === "click") {
			_this.tabItems.bind("click",function(){
				_this.invoke($(this));
			});
		}else if (config.triggerType === "mouseover" || config.triggerType != "click") {
			_this.tabItems.bind("mouseover",function(){
				_this.invoke($(this));
			});
		}else {
			aletr("出错了");
		}

		if (config.auto) {
			//定义一个全局的定时器
			_this.timer = null;
			//计数器
			_this.loop = 0;

			//自动播放
			_this.autoPlay();

			/*鼠标移到Tab上停止自动播放，移出tab又继续自动播放*/
			_this.tab.hover(function(){
				console.log("this",this);
				console.log("_this",_this);
				window.clearInterval(_this.timer);
			},function(){
				_this.autoPlay();
			});
		}

		/*设置默认第几个tab显示*/
		if(config.invoke > 1) {
			_this.invoke(_this.tabItems.eq(config.invoke-1));
		}
	}

	//定义原型
	Tab.prototype = {
		//获取配置参数
		getConfig: function() {
			//获取人工配置的config参数
			var config = this.tab.attr("data-config");
			//处理获取到的config参数,先确保有这个配置参数
			if(config && config != "") {
				return $.parseJSON(config);
			}else {
				return null;
			}
		},
		invoke: function(currentTab) {
			var _this = this;
			var effect = _this.config.effect;
			var index = currentTab.index();

			currentTab.addClass("actived").siblings().removeClass("actived");
			if (effect === "default" || effect != "fade") {
				_this.tabContents.eq(index).addClass("current").siblings().removeClass("current");
			}else if (effect === "fade") {
				_this.tabContents.eq(index).fadeIn().siblings().fadeOut();
			}

			//如果设置了自动切换，就把当前的loop值设置为当前的index
			if (_this.config.auto) {
				_this.loop = index;
			}
		},
		autoPlay:function() {
			var _this_ = this,
			    tabItems =_this_.tabItems,
			    tabLength = tabItems.size(),
			    config = _this_.config;
			_this_.timer = setInterval(function(){
				_this_.loop++;
				if (_this_.loop > (tabLength - 1)) {
					_this_.loop = 0;
				}
				console.log("->",_this_.loop);
				/*trigger()方法：触发某个元素的*/
				tabItems.eq(_this_.loop).trigger(config.triggerType);
				//触发一下鼠标移开时的事件，解决自动播放的问题
				if (_this_.config.auto) {
					tabItems.eq(_this_.loop).trigger("mouseout");
				}
			},config.auto);
		}
	}

	/*调用一个init()方法初始化多个tab*/
	Tab.init = function(tabs) {
		var _this = this;
		tabs.each(function(){
			console.log($(this));
			new _this($(this));
		});
	}

	/*注册成jquery方法tab()*/
	$.fn.extend({
		tab: function() {
			console.log("注册成jquery方法：",this);
			this.each({
				new Tab($(this));
			});
			return this;
		}
	})

	//将Tab类挂在window对象上
	window.Tab = Tab;
}))(jQuery);