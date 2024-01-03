<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img class="img-fluid" src="../../assets/images/pexels/pexels-andrea-piacquadio-3756678.jpg" alt="image"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../../assets/images/pexels/pexels-andrea-piacquadio-3756678.jpg" alt="image"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../../assets/images/pexels/pexels-andrea-piacquadio-3756678.jpg" alt="image"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../../assets/images/pexels/pexels-andrea-piacquadio-3756678.jpg" alt="image"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../../assets/images/pexels/pexels-andrea-piacquadio-3756678.jpg" alt="image"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../../assets/images/pexels/pexels-andrea-piacquadio-3756678.jpg" alt="image"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../../assets/images/pexels/pexels-andrea-piacquadio-3756678.jpg" alt="image"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../../assets/images/pexels/pexels-andrea-piacquadio-3756678.jpg" alt="image"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../../assets/images/pexels/pexels-andrea-piacquadio-3756678.jpg" alt="image"></swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles

  import 'swiper/css/pagination';

  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    name: "Slides-Per-View",
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>
<style>

.swiper {
  width: 100%;
  height: 300px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
