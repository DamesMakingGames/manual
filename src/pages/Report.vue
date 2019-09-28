<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full">
        <div class="leading-tight">Anonymously report an issue.</div>
      </div>
      <div class="mt-8 sm:mt-0"></div>
    </div>

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <p class="mb-6" id="contact">
            If you do not wish to engage our committee, are not seeking a resolution, and do not need personal follow-up, you may use this form to make a report to us about any issue. Your report will be emailed to all members of the current
            <g-link to="/manual/conflict-resolution-committee/">CR committee</g-link>.
          </p>

          <div
            v-if="submitted"
            class="p-3 text-white bg-green-400 font-bold text-center"
          >Thank you for your submission.</div>

          <div class="text-lg sm:text-lg mb-16">
            <form
              name="manual-submission"
              method="POST"
              data-netlify="true"
              class="mb-12"
              v-if="!submitted"
              @submit.prevent="handleSubmit"
            >
              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  v-model="formData.message"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-purple-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <input
                  type="submit"
                  value="Submit"
                  class="block bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-me -->
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      formData: {}
    };
  },
  watch: {
    $route(to, from) {
      this.submitted = false;
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(response => {
          this.submitted = true;
        })
        .catch(error => {
          console.log("====================================");
          console.log(`error in submiting the form data:${error}`);
          console.log("====================================");
        });
    }
  },
  metaInfo: {
    title: "Home"
  }
};
</script>

