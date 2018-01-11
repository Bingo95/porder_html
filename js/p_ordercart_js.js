$(function() {
	/*返回按钮点击*/
	$(".merchant_nav_back").click(function() {
		window.history.go(-1); //返回上一页
		/*window.history.back(); //返回上一页*/
		//强行刷新
		/*window.history.back();location.reload();*/
		/*window.location.go(-1); //刷新上一页*/
	})
})