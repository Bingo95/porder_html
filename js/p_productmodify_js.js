$(function() {
	$(".uctmodify_select").click(function() {
		var c = $(".uctmodify_select").find("option:selected").text();;
		$(".uctmodify_select_input").val(c);
	})
})