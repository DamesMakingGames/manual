<template>
  <Layout>
    <div
      class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
    >
      <div class="text-4xl font-bold w-full">
        <div class="leading-tight">
          Anonymously send a message or make a report.
        </div>
      </div>
      <div class="mt-8 sm:mt-0"></div>
    </div>

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <p class="mb-6" id="contact">
            If you do not wish to engage our committee, are not seeking a
            resolution, and do not need personal follow-up, you may use this
            form to make a report to us about any issue, or simply send a
            message without revealing your identity.
          </p>

          <div
            v-if="submitted"
            class="p-3 text-white bg-green-400 font-bold text-center"
          >
            Thank you for your submission.
          </div>

          <div class="text-lg sm:text-lg mb-16">
            <form
              :name="`manual-submission-${options[selected].value}`"
              method="POST"
              data-netlify="true"
              class="mb-12"
              v-if="!submitted"
              @submit.prevent="handleSubmit"
            >
              <label class="block text-copy-primary mb-2" for="message"
                >To</label
              >
              <div class="inline-block relative w-64">
                <select
                  v-model="selected"
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option
                    v-for="(option, i) in options"
                    :value="i"
                    :recipientMessage="option.recipientMessage"
                    :key="option.id"
                  >
                    {{ option.text }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
              <!-- <div
                class="mt-2 mb-12 text-sm"
                v-html="options[selected].recipientMessage"
              /> -->
              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message"
                  >Message</label
                >

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
      formData: {},
      selected: "0",
      recipientMessage:
        "Your report will be emailed to all members of the current <a href='/manual/conflict-resolution-committee/'>CR committee</a>.",
      options: [
        {
          text: "Conflict Resolution",
          value: "conres",
          recipientMessage:
            "Your report will be emailed to all members of the current <a href='/manual/conflict-resolution-committee/'>CR committee</a>.",
        },
        {
          text: "Board of Directors",
          value: "bod",
          recipientMessage:
            "Your report will be emailed to the current <a href='/manual/board-register/'>board of directors</a>.",
        },
      ],
    };
  },
  watch: {
    $route(to, from) {
      this.submitted = false;
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then((response) => {
          this.submitted = true;
        })
        .catch((error) => {
          console.log("====================================");
          console.log(`error in submiting the form data:${error}`);
          console.log("====================================");
        });
    },
  },
};
</script>
