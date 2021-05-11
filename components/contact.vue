<template>
  <section class="section" id="designs">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box text-center">
            <h6 class="title-sub-title mb-0 text-primary f-17">{{contact.superscript}}</h6>
            <h3 class="title-heading mt-4">{{contact.title}}</h3>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-4">
          <div class="contact-info bg-light p-4 rounded mt-4">
            <h5 class="f-18">{{contact.contact_details_title}}</h5>
            <p class="text-muted">
              {{contact.contact_details_subtitle}}
            </p>
            <div class="mt-4">
              <div class="media">
                <i class="pe-7s-home h4"></i>
                <div class="media-body pl-3">
                  <h5 class="mt-0 f-17">{{contact.address_heading}}</h5>
                  <p class="text-muted mb-0">
                    {{contact.address_text}}
                  </p>
                </div>
              </div>

              <div class="mt-4 pt-1">
                <div class="media">
                  <i class="pe-7s-mail-open-file h4"></i>
                  <div class="media-body pl-3">
                    <h5 class="mt-0 f-17">{{contact.email_heading}}</h5>
                    <p class="text-muted mb-0">{{contact.email_text}}</p>
                  </div>
                </div>
              </div>

              <div class="mt-4 pt-1">
                <div class="media">
                  <i class="pe-7s-call h4"></i>
                  <div class="media-body pl-3">
                    <h5 class="mt-0 f-17">{{contact.phone_heading}}</h5>
                    <p class="text-muted mb-0">{{contact.phone1}}</p>
                    <p class="text-muted mb-0">{{contact.phone2}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="pl-0 pl-lg-2 mt-4">
            <h5 class="f-18">Send a Message</h5>

            <div class="custom-form mt-3">
              <div id="message"></div>
              <form
                method="post"
                action="php/contact.php"
                name="contact-form"
                id="contact-form"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mt-3">
                      <label class="contact-lable">First Name</label>
                      <input
                        name="name"
                        id="name"
                        class="form-control"
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group mt-3">
                      <label class="contact-lable">Last Name</label>
                      <input
                        name="name"
                        id="lastname"
                        class="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="contact-lable">Email Address</label>
                      <input
                        name="email"
                        id="email"
                        class="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="contact-lable">Subject</label>
                      <input
                        name="subject"
                        id="subject"
                        class="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="contact-lable">Your Message</label>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="5"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 mt-3 text-right">
                    <input
                      id="submit"
                      name="send"
                      class="submitBnt btn btn-primary btn-round"
                      value="Send Message"
                      type="submit"
                    />
                    <div id="simple-msg"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	props:{
		contact: [Array, Object],
	},
}
</script>

<style lang="scss" scoped>
</style>