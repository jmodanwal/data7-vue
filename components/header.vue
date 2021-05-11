<template>
  <div>
    <Navdark v-if="theme == 'dark'" />
    <Navlight v-if="theme == 'light'" />
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
    },
  },
  mounted() {
    // SmoothLink
    $('.smoothlink').on('click', function (event) {
      var $anchor = $(this)
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - 0,
          },
          1500,
          'easeInOutExpo'
        )
      event.preventDefault()
    })
  },
}
</script>

<style lang="scss" scoped>
</style>