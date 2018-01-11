$(function() {
	$(".pub_btn_add").click(function() {
		$("#about").popup();
	});
	$(".pub_btn_del").click(function() {
		$.confirm("您确定要删除这条配置吗？", function() {
			//点击确认后的回调函数
		}, function() {
			//点击取消后的回调函数
		});

	});
})