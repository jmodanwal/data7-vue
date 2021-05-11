<template>
  <section class="section bg-light pt-5">
    <div class="container">
      <div class="row" id="usp">
        <div class="col-lg-5">
          <div class="counter-info mt-4">
            <h3>{{title}}</h3>
            <p class="text-muted mt-4">
              {{description}}
            </p>
            <div class="mt-4">
              <a :href="cta_url" class="btn btn-primary"
                >{{cta_title}}<i class="mdi mdi-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
		
          <div class="row">
		  
            <div class="col-lg-6" v-for="(usp, i) in usp">
              <div class="counter-box mt-4">
                <div class="media box-shadow bg-white p-4 rounded">
                  <div class="counter-icon mr-3">
                    <i :class="'mdi '+usp.icon+' text-primary h2'"></i>
                  </div>
                  <div class="media-body pl-2">
                    <h5 class="mt-2 mb-0 f-17">{{usp.title}}</h5>
                    <p class="text-muted mb-0 mt-2 f-15">
                      {{usp.description}}
                    </p>
                  </div>
                </div>
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
    cta_title: 	String,
    cta_url: 	String,
	usp: [Array, Object],
  },
  mounted() {
    // ----- COUNTER ----- //
    var a = 0
    $(window).scroll(function () {
      var oTop = $('#counter').offset().top - window.innerHeight
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count')
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum))
              },
              complete: function () {
                $this.text(this.countNum)
                //alert('finished');
              },
            }
          )
        })
        a = 1
      }
    })
  },
}
</script>

<style lang="scss" scoped>
</style>