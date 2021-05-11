<template>
  <section class="section" id="pricing">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box text-center">
            <h6 class="title-sub-title mb-0 text-primary f-17">{{superscript}}</h6>
            <h3 class="title-heading mt-4" v-html="title"></h3>
            <p class="text-muted mt-4" v-html="description"></p>
          </div>
        </div>
      </div>

      <div class="row mt-5 pt-4">
        <template v-for="(pricing, index) in pricingItems">
          <pricing-column :pricing="pricing" :key="index" />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import PricingColumn from './pricing-column';
export default {
  components: {
    PricingColumn,
  },
  props: {
    description: String,
    title: String,
    superscript: String,
    pricingItems: [Array, Object],
  },
  mounted() {
    $('[data-toggle="tooltip"]').tooltip()
  },
}
</script>

<style lang="scss" scoped>
</style>