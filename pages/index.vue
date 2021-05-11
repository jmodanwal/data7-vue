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
    <Logos :logos="logos.data" />

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
      :pricing-items="pricing.data"
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
    <Contact :contact="contact.data" />
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
		const heroRes = await fetch('https://admin.data7.io/items/home_page');
		this.hero = await heroRes.json();
		
		const logosRes = await fetch('https://admin.data7.io/items/logos/?fields=name,image&sort=sort');
		this.logos = await logosRes.json();

		const processRes = await fetch('https://admin.data7.io/items/process?fields=title,icon,description&sort=sort&filter[status][_eq]=published');
		this.process = await processRes.json();
		
		const featuresRes = await fetch('https://admin.data7.io/items/features?fields=title,icon,description,image&sort=sort&filter[status][_eq]=published');
		this.features = await featuresRes.json();

		const uspRes = await fetch('https://admin.data7.io/items/usp?fields=title,icon,description&sort=sort&filter[status][_eq]=published');
		this.usp = await uspRes.json();
		
		const pricingRes = await fetch('https://admin.data7.io/items/pricing?sort=sort&filter[status][_eq]=published');
		this.pricing = await pricingRes.json();

		const testimonialsRes = await fetch('https://admin.data7.io/items/testimonials?sort=sort&filter[status][_eq]=published');
		this.testimonials = await testimonialsRes.json();

		const contactRes = await fetch('https://admin.data7.io/items/contact');
		this.contact = await contactRes.json();
  },
}
</script>

<style lang="scss" scoped>
</style>