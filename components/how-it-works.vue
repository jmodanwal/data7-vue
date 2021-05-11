<template>
  <section class="section pt-5" id="how-it-works">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box text-center">
            <h6 class="title-sub-title mb-0 text-primary f-17">{{superscript}}</h6>
            <h3 class="title-heading mt-4" v-html="title"></h3>
          </div>
        </div>
      </div>

      <div class="row mt-5">
	  
        <div class="col-lg-4" v-for="(data, i) in process">
          <div class="work-box text-center p-3">
            <div class="arrow">
              <img src="images/arrow-1.png" alt="" />
            </div>
            <div class="work-count">
              <p class="mb-0">{{i+1}}</p>
            </div>
            <div class="work-icon">
              <i :class="data.icon"></i>
            </div>
            <h5 class="mt-4">{{data.title}}</h5>
            <p class="text-muted mt-3">
              {{data.description}}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    superscript:String,
    title: 		String,
	process: [Array, Object],
  },
}
</script>

<style lang="scss" scoped>
</style>