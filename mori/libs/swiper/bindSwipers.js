function bindSwipers(...swiperList) {
	for (const swiper of swiperList) {
		swiper.setTranslate = function(translate, byController, doNotPropagate) {
			if (doNotPropagate) {
				Swiper.prototype.setTranslate.apply(this, arguments)
			} else {
				for (const swiper of swiperList) {
					swiper.setTranslate(translate, byController, true)
				}
			}
		}
		swiper.setTransition = function(duration, byController, doNotPropagate) {
			if (doNotPropagate) {
				Swiper.prototype.setTransition.apply(this, arguments)
			} else {
				for (const swiper of swiperList) {
					swiper.setTransition(duration, byController, true)
				}
			}
		}
	}
}
