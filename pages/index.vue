<template>
  <div>
    <Header theme="light" />
     <Hero1 
	:superscript="hero.data.superscript"
	:title="hero.data.hero_title"
	:description="hero.data.hero_description"
	:image="getAssetsUrl()+hero.data.hero_image"
	:cta_title="hero.data.hero_cta_title"
	:cta_url="hero.data.hero_cta_url"
	/>
    <Logos 
	:logos="logos.data"
	/>

    <HowItWorks 
	:superscript="hero.data.how_work_superscript"
	:title="hero.data.how_work_title"
	:process="process.data"
	/>

    <Features 
	:superscript="hero.data.features_superscript"
	:title="hero.data.features_title"
	:features="features.data"
	/>
    <Usp 
	:title="hero.data.usp_title"
	:description="hero.data.usp_description"
	:cta_title="hero.data.usp_cta_title"
	:cta_url="hero.data.usp_cta_url"
	:usp="usp.data"
	/>

    <Pricing 
	:superscript="hero.data.pricing_superscript"
	:title="hero.data.pricing_title"
	:description="hero.data.pricing_description"
	:pricing="pricing.data"
	/>
    <Testimonial 
	:superscript="hero.data.testimonial_superscript"
	:title="hero.data.testimonial_title"
	:testimonials="testimonials.data"
	/>

    <Video 
	:superscript="hero.data.video_superscript"
	:title="hero.data.video_title"
	:subtitle="hero.data.video_subtitle"
	:video_id="hero.data.video_viemo_id"
	/>
    <Contact 
	:contact="contact.data"
	/>
  </div>
</template>

<script>
export default {
  data() {
      return {
        hero:    [],
        logos:   [],
        process: [],
        features:[],
        usp:     [],
        pricing: [],
        testimonials: [],
        contact: [],
      }
  },
  mounted(){
	console.log('mounted')
  },
  async fetch() {
    console.log('fetch')
      this.hero = await fetch(
        'https://admin.data7.io/items/home_page'
      ).then(res => res.json())
	  this.logos = await fetch(
        'https://admin.data7.io/items/logos/?fields=name,image&sort=sort'
      ).then(res => res.json())
	  this.process = await fetch('https://admin.data7.io/items/process?fields=title,icon,description&sort=sort&filter[status][_eq]=published'
      ).then(res => res.json())
	  this.features = await fetch('https://admin.data7.io/items/features?fields=title,icon,description,image&sort=sort&filter[status][_eq]=published'
      ).then(res => res.json())
	  this.usp = await fetch('https://admin.data7.io/items/usp?fields=title,icon,description&sort=sort&filter[status][_eq]=published'
      ).then(res => res.json())
	  this.pricing = await fetch('https://admin.data7.io/items/pricing?sort=sort&filter[status][_eq]=published'
      ).then(res => res.json())
	  this.testimonials = await fetch('https://admin.data7.io/items/testimonials?sort=sort&filter[status][_eq]=published'
      ).then(res => res.json())
	  this.contact = await fetch('https://admin.data7.io/items/contact'
      ).then(res => res.json())
	  //console.log(this.process.data)
  },
}
</script>

<style lang="scss" scoped>
</style>