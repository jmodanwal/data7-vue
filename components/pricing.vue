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

        <div class="col-lg-4 mt-4" v-for="(pricing, i) in pricing">
          <div class="pricing-box rounded" v-bind:class="{ 'border border-primary': pricing.popular == 'yes' }">
            <div class="pricing-content">
              <div class="pricing-lable" v-if="pricing.popular == 'yes'">Popular</div>
              <h4 class="text-uppercase">{{pricing.title}}</h4>
              <div>
                <p class="text-muted mb-4 pb-1">
                  {{pricing.description}}
                </p>
              </div>
              <hr />
              <div class="pricing-plan mt-4 text-primary text-center">
                <h1>
                  <sup class="text-muted">$ </sup>{{pricing.amount}}
                  <small class="f-16 text-muted">/ Mo</small>
                  <small class="f-16 text-muted d-block">{{pricing.down_text}}</small>
                </h1>
              </div>

              <hr />
              <div class="pricing-features pt-3">
                <div v-for="(features, j) in pricing.features">
                  <p
                    class="text-muted"
                    data-toggle="tooltip"
                    data-placement="right"
                    :title="features.tooltip"
					v-if="features.tooltip!=''"
                  >
                    <strong class="text-dark">{{features.text1}}</strong> {{features.text2}}
                  </p>
				  <p
                    class="text-muted"
					v-if="features.tooltip==''"
                  >
                    <strong class="text-dark">{{features.text1}}</strong> {{features.text2}}
                  </p>
                </div>
                
              </div>
              <div class="pricing-border mt-3"></div>
             
			  <div class="mt-4 pt-2 text-center">
				<stripe-checkout
				  ref="checkoutRef"
				  mode="payment"
				  :pk="publishableKey"
				  :lineItems="lineItems"
				  :successUrl="successURL"
				  :cancelUrl="cancelURL"
				  @loading="v => loading = v"
				/>
				<button @click="submit" class="btn btn-primary btn-round">Pay now!</button>
			  </div>
			  
            </div>
          </div>
        </div>
       
		
      </div>
    </div>
  </section>
</template>

<script>
export default {

  props: {
    description:String,
    title: 		String,
	superscript:String,
	pricing: [Array, Object],
  },
  mounted() {
    $('[data-toggle="tooltip"]').tooltip()
  },
  data () {
    this.publishableKey = "pk_test_Q0o6I4Bcqt8DK7tkI6wIitsq";
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1IpoVe21WfJHJ0cX3PlQAVhO', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:3000/?sucsess',
      cancelURL: 'http://localhost:3000/?cancel',
    };
  },
  methods: {
    submit () {
	  console.log("submit");
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
}
</script>

<style lang="scss" scoped>
</style>