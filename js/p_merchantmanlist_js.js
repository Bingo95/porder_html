$(function() {
	$(".weui-flex").click(function() {
		if($(this).find(".a").text() == "通过") {
			$.confirm({
				title: '撤销信息',
				text: '撤销【111】的订货权限？',
				onOK: function() {
					//点击确认
				},
				onCancel: function() {}
			});
		} else {
			$.modal({
				title: "审核信息",
				text: "通过【111】的申请订货？",
				buttons: [{
						text: "通过",
						onClick: function() {

						}
					},
					{
						text: "不通过",
						className: "warn",
						onClick: function() {

						}
					},
					{
						text: "取消",
						className: "default"
					},
				]
			});
		}
	})
})