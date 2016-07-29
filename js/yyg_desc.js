/*加载完成*/
window.onload = function(){
	/*初始化条目*/
	initItem();
}

window.onresize = function(){
	//alert();
	initItem();
}

//宽高等比
function initItem(){
	var iw = $(".item").width();
	$('.item').height(iw/2.36);
}

/*监听*/
$(function(){
	$(document).ready(function(){
		$(".cate-menu").find('a').on("click",function(){
			//alert();
			$(".cate-menu").find(".item-active").removeClass("item-active");
			$(this).parent('div').addClass("item-active");
			if ($(this).is("#useable-list")) {
				$(".disable-item").css('display', 'none');
				$(".enable-item").css('display', 'block');
			}else if ($(this).is("#disable-list")) {
				$(".disable-item").css('display', 'block');
				$(".enable-item").css('display', 'none');
			}else if ($(this).is("#all-list")) {
				$(".disable-item").css('display', 'block');
				$(".enable-item").css('display', 'block');
			}
		});
	});
})