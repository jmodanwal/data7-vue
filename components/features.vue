<template>
  <section class="section bg-light" id="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box text-center">
            <h6 class="title-sub-title mb-0 text-primary f-17">{{superscript}}</h6>
            <h3 class="title-heading mt-4" v-html="title"></h3>
          </div>
        </div>
      </div>

      <div class="row align-items-center mt-5">
        <div class="col-lg-6">
          <div class="tab-content mt-4" id="v-pills-tabContent">
		  
            <div
              class="tab-pane fade "
			  v-bind:class="{ 'show active': i == 0 }"
              :id="'v-pills-gen-ques-'+i"
              role="tabpanel"
              :aria-labelledby="'v-pills-gen-ques-tab-'+i"
			  v-for="(features, i) in features" 
            >
              <div class="services-img">
                <img :src="getAssetsUrl()+features.image" class="img-fluid" alt="" />
              </div>
            </div>
			
          </div>
        </div>

        <div class="col-lg-6">
          <div
            class="nav flex-column nav-pills mt-4"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link "
			  v-bind:class="{ active: i == 0 }"
              :id="'v-pills-gen-ques-tab-'+i"
              data-toggle="pill"
              :href="'#v-pills-gen-ques-'+i"
              role="tab"
              :aria-controls="'v-pills-gen-ques-'+i"
              aria-selected="true"
			  v-for="(features, i) in features" 
            >
              <div class="p-3">
                <div class="media">
                  <div class="services-title">
                    <i :class="'mdi '+features.icon" ></i>
                  </div>
                  <div class="media-body pl-4">
                    <h5 class="mb-2 services-title mt-2">
                      {{features.title}}
                    </h5>
                    <p class="mb-0">
                      {{features.description}}
                    </p>
                  </div>
                </div>
              </div>
            </a>
           
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
	features: [Array, Object],
  },
}
</script>

<style lang="scss" scoped>
</style>