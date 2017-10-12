work();
setInterval(work, 1000);
function work() {
	var list = $("iframe");
	for (var i = 0; i < list.length; i ++) {
		if ($(list[i]).attr("src") != undefined && $(list[i]).attr("src").indexOf("pos.baidu.com") > -1) {
			$(list[i]).remove();
		}
	}
}

