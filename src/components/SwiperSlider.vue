<template>
  <swiper
    class="parallax-slider"
    :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
    parallax
    grabCursor
    @swiper="onSwiperInitialized"
  >
    <div class="parallax-slider-navigation">
      <div class="nav-indicator prevArrow">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
      <div class="nav-indicator nextArrow">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
    </div>
    <swiper-slide
      class="parallax-slide"
      v-for="image in images"
      :key="image.id"
    >
      <div
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <img :src="image.imageUrl" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// swiper core
import SwiperCore, { Navigation, Parallax } from "swiper";

// swiper vue
import { Swiper, SwiperSlide } from "swiper/vue";

// import swiper css
import "swiper/swiper.scss";

// import css for components
// navigation
import "swiper/components/navigation/navigation.scss";

// font awesome icons

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

SwiperCore.use([Navigation, Parallax]);

export default {
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        { id: 1, imageUrl: require("../assets/images/image1.jpg") },
        { id: 2, imageUrl: require("../assets/images/image2.jpg") },
        { id: 3, imageUrl: require("../assets/images/image3.jpg") },
      ],
    };
  },
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon,
  },
  methods: {
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
  },
};
</script>

<style scoped>
.parallax-slider {
  position: relative;
}
.parallax-slide {
  height: 500px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.parallax-slider-navigation {
  position: absolute;
  top: 50%;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 0;
}

.parallax-slide-image {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-indicator {
  height: 40px;
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #6b77f6;
  color: #ffffff;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%);
}
</style>
