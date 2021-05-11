<template>
  <section class="section pt-0">
    <div class="container">
      <div class="row mt-5">
	  
        <div class="col-lg-3"  v-for="(logo, i) in logos">
          <div class="client-images mt-4">
            <img
              :src="getAssetsUrl()+logo.image"
              :alt="logo.name"
              class="mx-auto img-fluid d-block"
            />
          </div>
        </div>
		
      </div>
    </div>
  </section>
</template>

<script>
export default {
	props: {
		logos: [Array, Object],
	},
}
</script>

<style lang="scss" scoped>
</style>