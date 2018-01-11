$(function() {
	$('#uploaderInput').on('change', bcilck);

	function bcilck() {
		var $this = $(this);
		// 获取上传文件信息集合
		var fileInfo = this.files[0];

		// 判断是否为图片格式
		if(fileInfo.type.indexOf('image') == -1) {
			alert('请选择图片');
			return;
		}

		// 获取图片暂存路径
		var url = (window.webkitURL ? webkitURL : window.URL).createObjectURL(fileInfo);
		if(url) {
			// 创建一个图片
			var img = new Image();
			// 把获取的图片路径赋值给他
			img.src = url;
			// 这个图片加载后
			img.onload = function() {
				var imgWidth = img.width;
				var imgHeight = img.height;
				var maxWidth = 600;
				var maxHeight = 600;
				var resultWidth = 0;
				var resultHeight = 0;
				var degree = 0;
				var flag;

				// 图片尺寸按照比例缩放
				if(imgWidth > imgHeight) {
					if(imgWidth > maxWidth) {
						resultWidth = maxWidth;
						resultHeight = maxWidth * imgHeight / imgWidth;
					} else {
						resultWidth = imgWidth;
						resultHeight = imgHeight;
					}
				} else {
					if(imgHeight > maxHeight) {
						resultHeight = maxHeight;
						resultWidth = maxHeight * imgWidth / imgHeight;
					} else {
						resultWidth = imgWidth;
						resultHeight = imgHeight;
					}
				}

				// 插入图片并显示
				$('.weui-uploader__input-box img').attr('src', url).show();
				// 给canvas赋值压缩后的宽高
				var canvas = document.querySelector('.weui-uploader__input-box canvas');
				canvas.width = resultWidth;
				canvas.height = resultHeight;

				// 绘图环境
				var ctx = canvas.getContext('2d');

				// 在canvas上存放图片
				ctx.drawImage(img, 0, 0, resultWidth, resultHeight);

				// canvas转base64，图片质量0.7
				var base64 = canvas.toDataURL('image/jpeg', 0.7);

				// 把压缩后的base64存放到img上，方便开发获取
				$('.weui-uploader__input-box img').attr('data-src', base64);
				$('#imgbox').addClass("weui-uploader__input_2");
				//$(".weui-uploader__input-box").hide();
				//$("#uploaderFiles").show();
				// 测试
				// $('body').append('<img src="'+base64+'" />');
			};
		}
	};
});