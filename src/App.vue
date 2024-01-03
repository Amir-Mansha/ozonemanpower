<template>
  <div class="page">
    <Teleport to="#appHeader">
      <AppHeader />
    </Teleport>
      
    <router-view></router-view>
    <Teleport to="#appFooter">
      <AppFooter />
    </Teleport>
  </div>
  <!-- page end -->
</template>

<script>
import AppHeader from "./Layout/AppHeader.vue";
import AppFooter from "./Layout/AppFooter.vue";

import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/font-awesome.css';
import './assets/css/themify-icons.css';
import './assets/css/news.css';
import './assets/css/flaticon.css';
import './assets/css/slick.css';
import './assets/revolution/css/rs6.css';
import './assets/css/prettyPhoto.css';
import './assets/css/shortcodes.css';
import './assets/css/main.css';
import './assets/css/megamenu.css';
import './assets/css/responsive.css';
// js files
// import './assets/js/jquery.min.js';
// import './assets/js/tether.min.js';
import './assets/js/bootstrap.min.js';
import './assets/js/jquery.easing.js';
import './assets/js/jquery-waypoints.js';
import './assets/js/jquery-validate.js';
// import './assets/js/jquery.prettyPhoto.js';
import './assets/js/slick.min.js';
// import './assets/js/numinate.min.js';
import './assets/js/imagesloaded.min.js';
// import './assets/js/jquery-isotope.js';
import './assets/js/main.js';
import './assets/revolution/js/slider.js';
// import './assets/revolution/js/revolution.tools.min.js';
// import './assets/revolution/js/rs6.min.js';



export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
