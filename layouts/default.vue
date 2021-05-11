<template>
  <div>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Vue from 'vue'
import functions from '~/mixins/functions'
Vue.mixin(functions)
export default {
  mounted() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop()

      if (scroll >= 50) {
        $('.sticky').addClass('nav-sticky')
      } else {
        $('.sticky').removeClass('nav-sticky')
      }
    })

    // Magnific Popup
    $('.mfp-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
    })
  },
}
</script>