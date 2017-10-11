$(function(){
	work();
	setInterval(work, 1000);
	function work() {
		$("#content_right").remove();
		var list = $("#content_left").children();
		$.each(list, function(i, n){
			var spans = $(n).find("span");
			for (var j = 0; j < spans.length; j++) {
				if ($(spans[j]).html() == '广告') {
					$(n).remove();
					break;
				}
			}
		});
	}
});
