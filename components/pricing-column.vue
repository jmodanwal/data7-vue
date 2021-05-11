<template>
  <div class="col-lg-4 mt-4">
    <div
      class="pricing-box rounded"
      v-bind:class="{ 'border border-primary': pricing.popular == 'yes' }"
    >
      <div class="pricing-content">
        <div class="pricing-lable" v-if="pricing.popular == 'yes'">Popular</div>
        <h4 class="text-uppercase">{{pricing.title}}</h4>
        <div>
          <p class="text-muted mb-4 pb-1">{{pricing.description}}</p>
        </div>
        <hr />
        <div class="pricing-plan mt-4 text-primary text-center">
          <h1>
            <sup class="text-muted">$</sup>
            {{pricing.amount}}
            <small class="f-16 text-muted">/ Mo</small>
            <small class="f-16 text-muted d-block">{{pricing.down_text}}</small>
          </h1>
        </div>

        <hr />
        <div class="pricing-features pt-3">
          <div v-for="(features, j) in pricing.features" :key="j">
            <p
              class="text-muted"
              data-toggle="tooltip"
              data-placement="right"
              :title="features.tooltip"
              v-if="features.tooltip!=''"
            >
              <strong class="text-dark">{{features.text1}}</strong>
              {{features.text2}}
            </p>
            <p class="text-muted" v-if="features.tooltip==''">
              <strong class="text-dark">{{features.text1}}</strong>
              {{features.text2}}
            </p>
          </div>
        </div>
        <div class="pricing-border mt-3"></div>

        <div class="mt-4 pt-2 text-center">
          <stripe-checkout
            mode="payment"
            :ref="`checkoutRef`"
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
</template>

<script>
export default {
  props: {
    pricing: {
      type: Object,
      default: () => ({}),
    },
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
    submit (pricing) {
	    try {
        this.$refs.checkoutRef.redirectToCheckout();
      } catch (e) {
        console.error('submit error', e);
      }
    },
  },
};
</script>
