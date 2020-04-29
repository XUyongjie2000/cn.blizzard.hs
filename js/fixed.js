(function ($) {
	var fixed = {
		defaults: {
			marginTop: 0
		}
	};
	function Fixed(root, defaults) {
		var self = this,
			element = root;
		var originStyles = {
			position: null,
			top: null,
			visibility: null
		}
		var ie6 = $.browser.msie && $.browser.version == 6;
		var marginTop = defaults.marginTop || 0;
		var originTop = element.offset().top;

		$.extend(this, {
			setup: function () {


				// 修正过高的 marginTop
				marginTop = marginTop <= originTop ? marginTop : originTop;
				// 保存原有的样式
				for (var style in originStyles) {
					if (originStyles.hasOwnProperty(style)) {
						originStyles[style] = element.css(style);
					}
				}

				$(window).scroll(function () {
					self.scrollFn();
				})

			},
			scrollFn: function () {
				var w = $(window);
				var distance = originTop - w.scrollTop();
				// 当距离小于等于预设的值时
				// 将元素设为 fix 状态
				if (distance <= marginTop) {
					if (!ie6) {
						element.css({
							position: "fixed",
							top: marginTop,
							visibility: "visible"
						});
					} else {
						element.css({
							position: "absolute",
							top: marginTop + w.scrollTop(),
							visibility: "visible"
						});

					}

				} else if (distance > marginTop) {
					// 恢复原有的样式
					element.css(originStyles);
				}
			},
			init: function () {
				this.setup();
				this.scrollFn();

			}
		})
		self.init();

	}

	$.fn.fixed = function (defaults) {
		defaults = $.extend({},
			fixed.defaults, defaults);
		return this.each(function () {
			el = new Fixed($(this), defaults);
		})

	}

})(jQuery);