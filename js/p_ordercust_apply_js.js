$(function() {
	$("#upfrom").click(function() {
		var a = $("#name").val();
		var b = $("#name2").val();
		var c = $("#name3").val();
		if(a == "") {
			$(".shop_prompt").text("请输入名称");
		} else if(b == "") {
			$(".shop_prompt").text("请输入联系地址");
		} else if(c == "" || !c.match(/^1(3|4|5|7|8)\d{9}$/)) {
			$(".shop_prompt").text("请输入正确手机号");
		} else {
			$(".shop_prompt").text("");
		}
	})
})