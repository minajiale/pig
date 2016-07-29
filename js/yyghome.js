window.onload = function(){
		initBanner();
		initAds();
		inittab();
	}
	window.onresize = function(){
		initBanner();
		initAds();
		inittab();
	}
	/**
	 * 实现轮播图的宽高等比
	 * @return {[type]} [description]
	 */

	function initBanner(){
		var bw = $("#banner").width();
		$("#banner").height(bw/2.16);
		//alert();
		$("#banner").find('img').height($("#banner").height());
	}
	function initAds(){
		var bw = $("#ads").width();
		$("#ads").height(bw/6.5);
	}
	function inittab(){
		var fh = $("#footer").height();
		$("#footer").find('img').height(fh);
	}

TouchSlide({ 
	slideCell:"#focus",
	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	duration: 350, // 动画速度
    delay: 3000, // 动画时间间隔
	mainCell:".bd ul", 
	effect:"left", 
	autoPlay:true,//自动播放
	autoPage:true, //自动分页
	switchLoad:"" //切换加载，真实图片路径为"_src" 
});