<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    @autoplayTimeLeft="onAutoplayTimeLeft"
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
    <template #container-end>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
  </swiper>
</template>
<script>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const progressCircle = ref(null);
      const progressContent = ref(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.value.style.setProperty('--progress', 1 - progress);
        progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
      };
      return {
        onAutoplayTimeLeft,
        progressCircle,
        progressContent,
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style>
.swiper {
  width: 100%;
  height: 350px;
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
.mySwiper {
  margin-bottom: 30px;
}

</style>
