$(function() {
	/*ajax*/
	$("#search_list").ready(function() {
		$.ajax({
			type: 'post',
			dataType: "json",
			data: {
				param_json: '{"action_sort":"90101","Data":{}}'
			},
			url: "http://192.168.1.70/perporder/pub",
			success: function(data) {
				var _data = data.Data;
				var listcontent = $(".sales_list_content");
				for(var i = 0; i < _data.length; i++) {
					listcontent.append(
						
					);
				}
			},
			error: function() {
				$.alert("服务器错误，请稍候重试！");
			},
			complete: function() {
				sales_list_boxon();
			}
		});
	})
	/*左列表点击*/
	$(".page_left").on("click", "li", function() {
		// 设index为当前点击
		var index = $(this).index();
		// 点击添加样式利用siblings清除其他兄弟节点样式
		$(this).addClass("active").siblings().removeClass("active");
		// 同理显示与隐藏
	})

	/*侧滑*/
	$("#overlay").hide();
	$("#left-panel-link").click(function() {
		$("#overlay").show();
		$("#list").addClass("wrap2");
	});

	$('#left-panel-link').panelslider();
	$("#panel_close").click(function() {
		$.panelslider.close();
		$("#overlay").hide();
	});
})

function overlay1() {
	$("#overlay").hide();
	$("#list").removeClass("wrap2");
};